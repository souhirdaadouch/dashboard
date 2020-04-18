import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { athlesante } from '@modules/frontpages/models';
import { athlesanteService } from '@modules/frontpages/services/athlesante.service';

@Component({
    selector: 'sb-athle-sante',
    templateUrl: './athle-sante.component.html',
    styleUrls: ['./athle-sante.component.scss'],
})
export class AthleSanteComponent implements OnInit {
    errorMessage = '';
    // @ts-ignore
    athlesanteForm: FormGroup;
    athles = new athlesante();
    json: any;
    constructor(private athlesanteService1: athlesanteService, private router: Router) {}

    ngOnInit() {
        this.athlesanteForm = new FormGroup({
            id: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required),
            programme: new FormControl(null, Validators.required),
            information: new FormControl(null, Validators.required),
        });
        this.athles.id = 0;
        this.athlesanteForm.setValue({
            id: this.athles.id,
            description: this.athles.description,
            programme: this.athles.programme,
            information: this.athles.information,
        });
    }
    onSubmit() {
        this.json = JSON.stringify(this.athlesanteForm.value);
        console.log(this.json);
        // this.http.put('http://localhost:3000/api//' +  this.athles.id, this.json, {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json'
        //     })
        // })
        //     .subscribe(responseData => {
        //         console.log(responseData);
        //     });
        this.athlesanteForm.reset();
    }
    /*addAthlesante(formulaire: NgForm) {
        this.athlesanteService1.addathlesante(formulaire.value).subscribe(
            reponse => {
                const link = ['ath'];
                this.router.navigate(link);
            },
            error => {
                this.errorMessage = 'Problème de connexion à votre serveur';
                console.log(error);
            }
        );
    }*/
}
