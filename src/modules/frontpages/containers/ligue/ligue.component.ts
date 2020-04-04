import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LigueService } from '@modules/frontpages/services';

@Component({
    selector: 'sb-ligue',
    templateUrl: './ligue.component.html',
    styleUrls: ['./Ligue.component.scss'],
})
export class LigueComponent implements OnInit {
    errorMessage = '';

    // formulaire: NgForm;
    constructor(private LigueService1: LigueService, private router: Router) {}

    ngOnInit() {}
    /*addLigue(formulaire: NgForm) {
        /*this.LigueService1.addLigue(formulaire.value).subscribe(
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
