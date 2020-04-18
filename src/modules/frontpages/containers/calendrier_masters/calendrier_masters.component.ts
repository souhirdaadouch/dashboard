import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { calendriermasters } from '@modules/frontpages/models';
import { CalendriermasService } from '@modules/frontpages/services/calendriermas.service';
@Component({
    selector: 'sb-calendriermasters',
    templateUrl: './calendrier_masters.component.html',
    styleUrls: ['./calendrier_masters.component.scss'],
})
export class CalendriermastersComponent implements OnInit {
    errorMessage = '';
    // @ts-ignore
    calMasForm: FormGroup;
    // @ts-ignore
    calmas = new calendriermasters();
    json: any;

    constructor(private calendriermasService1: CalendriermasService, private router: Router) {}
    ngOnInit() {
        this.calMasForm = new FormGroup({
            idcompetitionmas: new FormControl(null, Validators.required),
            competition: new FormControl(null, Validators.required),
            organisateur: new FormControl(null, Validators.required),
            lieu: new FormControl(null, Validators.required),
            date: new FormControl(null, Validators.required),
        });
        this.calmas.idcompetitionmas = 0;
        this.calMasForm.setValue({
            idcompetitionmas: this.calmas.idcompetitionmas,
            competition: this.calmas.competition,
            organisateur: this.calmas.organisateur,
            lieu: this.calmas.lieu,
            date: this.calmas.date,
        });
    }
    onSubmit() {
        this.json = JSON.stringify(this.calMasForm.value);
        console.log(this.json);
        // this.http.put('http://localhost:3000/api/athlete/' +  this.athle.id, this.json, {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json'
        //     })
        // })
        //     .subscribe(responseData => {
        //         console.log(responseData);
        //     });
        this.calMasForm.reset();
    }

    /*addcompetitionmas(formulaire: NgForm) {
        this.calendriermasService1.addcompetitionmas(formulaire.value).subscribe(
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
