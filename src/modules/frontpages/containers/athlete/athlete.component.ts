import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AthleteService } from '@modules/frontpages/services';

@Component({
    selector: 'sb-athlete',
    templateUrl: './athlete.component.html',
    styleUrls: ['./athlete.component.scss'],
})
export class AthleteComponent implements OnInit {
    errorMessage = '';

    // formulaire: NgForm;
    constructor(private AthleteService1: AthleteService, private router: Router) {}

    ngOnInit() {}
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
