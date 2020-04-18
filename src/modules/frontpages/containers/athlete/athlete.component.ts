import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AthleteService } from '@modules/frontpages/services';

import { athlete } from '../../models/athlete.model';

@Component({
    selector: 'sb-athlete',
    templateUrl: './athlete.component.html',
    styleUrls: ['./athlete.component.scss'],
})
export class AthleteComponent implements OnInit {
    errorMessage = '';
    // @ts-ignore
    athleteForm: FormGroup;
    athle = new athlete();
    json: any;

    // formulaire: NgForm;
    constructor(private AthleteService1: AthleteService, private router: Router) {}

    ngOnInit() {
        this.athleteForm = new FormGroup({
            id: new FormControl(null, Validators.required),
            nom: new FormControl(null, Validators.required),
            prenom: new FormControl(null, Validators.required),
            sexe: new FormControl(null, Validators.required),
            ddn: new FormControl(null, Validators.required),
            lieu: new FormControl(null, Validators.required),
            club: new FormControl(null, Validators.required),
            clubetranger: new FormControl(null, Validators.required),
            discipline1: new FormControl(null, Validators.required),
            discipline2: new FormControl(null, Validators.required),
            Meilleurperfo1: new FormControl(null, Validators.required),
            Meilleurperfo2: new FormControl(null, Validators.required),
            classe: new FormControl(null, Validators.required),
            etablissement: new FormControl(null, Validators.required),
            encadreurtech: new FormControl(null, Validators.required),
            Npasseport: new FormControl(null, Validators.required),
            validite: new FormControl(null, Validators.required),
            telephone: new FormControl(null, Validators.required),
            adremail: new FormControl(null, Validators.required),
            adresse: new FormControl(null, Validators.required),
            pointure: new FormControl(null, Validators.required),
            Performances: new FormControl(null, Validators.required),
            PathPerformanceCopiePDF: new FormControl(null, Validators.required),
        });
        this.athle.id = 0;
        // id te54o ml bouton edit ml router
        this.athle.nom = 'athlete name';
        this.athle.prenom = 'athlete prenom';
        this.athle.sexe = 'F';
        this.athle.adremail = 'adresse mail de l athlete';
        // les donnees yjiw ml requete ml back he4om 3mlthom ll test
        console.log(this.athle);
        this.athleteForm.setValue({
            id: this.athle.id,
            nom: this.athle.nom,
            prenom: this.athle.prenom,
            sexe: this.athle.sexe,
            ddn: this.athle.ddn,
            lieu: this.athle.lieu,
            club: this.athle.club,
            clubetranger: this.athle.clubetranger,
            discipline1: this.athle.discipline1,
            discipline2: this.athle.discipline2,
            Meilleurperfo1: this.athle.Meilleurperfo1,
            Meilleurperfo2: this.athle.Meilleurperfo2,
            classe: this.athle.classe,
            etablissement: this.athle.etablissement,
            encadreurtech: this.athle.encadreurtech,
            Npasseport: this.athle.Npasseport,
            validite: this.athle.validite,
            telephone: this.athle.telephone,
            adremail: this.athle.adremail,
            adresse: this.athle.adresse,
            pointure: this.athle.pointure,
            Performances: this.athle.Performances,
            PathPerformanceCopiePDF: this.athle.PathPerformanceCopiePDF,
        });
    }

    onSubmit() {
        this.json = JSON.stringify(this.athleteForm.value);
        console.log(this.json);
        // this.http.put('http://localhost:3000/api/athlete/' +  this.athle.id, this.json, {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json'
        //     })
        // })
        //     .subscribe(responseData => {
        //         console.log(responseData);
        //     });
        this.athleteForm.reset();
    }

    /*addathlete(formulaire: NgForm) {
        /*this.AthleteService1.addAthlete(formulaire.value).subscribe(
            reponse => {
                const link = ['form'];
                this.router.navigate(link);
            },
            error => {
                this.errorMessage = 'Problème de connexion à votre serveur';
                console.log(error);
            }
        );
    }*/
}
