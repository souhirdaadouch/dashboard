import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { championnat } from '@modules/frontpages/models';
import { ChampionnatService } from '@modules/frontpages/services';

@Component({
    selector: 'sb-listechampionnat',
    templateUrl: './liste_championnat.component.html',
    styleUrls: ['./liste_championnat.component.scss'],
})
export class ListechampionnatComponent implements OnInit {
    errorMessage = '';
    // @ts-ignore
    champForm: FormGroup;
    // @ts-ignore
    championnat = new championnat();
    json: any;
    constructor(private championnatService1: ChampionnatService, private router: Router) {}
    ngOnInit() {
        this.champForm = new FormGroup({
            idchampionnat: new FormControl(null, Validators.required),
            manifestation: new FormControl(null, Validators.required),
            organisateur: new FormControl(null, Validators.required),
            lieu: new FormControl(null, Validators.required),
            niveau: new FormControl(null, Validators.required),
            categorie: new FormControl(null, Validators.required),
            type: new FormControl(null, Validators.required),
            date: new FormControl(null, Validators.required),
        });
        this.champForm.setValue({
            idchampionnat: this.championnat.idchampionnat,
            manifestation: this.championnat.manifestation,
            organisateur: this.championnat.organisateur,
            lieu: this.championnat.lieu,
            niveau: this.championnat.niveau,
            categorie: this.championnat.categorie,
            type: this.championnat.type,
            date: this.championnat.date,
        });
    }
    onSubmit() {
        this.json = JSON.stringify(this.champForm.value);
        console.log(this.json);
        // this.http.put('http://localhost:3000/api/athlete/' +  this.athle.id, this.json, {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json'
        //     })
        // })
        //     .subscribe(responseData => {
        //         console.log(responseData);
        //     });
        this.champForm.reset();
    }
    /*   addchampionnat(formulaire: NgForm) {
        /*this.championnatService1.addchampionnat(formulaire.value).subscribe(
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
