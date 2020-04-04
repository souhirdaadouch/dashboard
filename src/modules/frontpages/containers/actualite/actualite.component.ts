import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { actualiteService } from '@modules/frontpages/services/actualite.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
    selector: 'sb-actualite',
    templateUrl: './actualite.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./actualite.component.scss'],
})
export class ActualiteComponent implements OnInit {
    errorMessage = '';

    constructor(private actualiteService1: actualiteService, private router: Router) {}

    ngOnInit() {}
    addactualite(formulaire: NgForm) {
        /*this.actualiteService1.addactualite(formulaire.value).subscribe(
            reponse => {
                const link = ['ath'];
                this.router.navigate(link);
            },
            error => {
                this.errorMessage = 'Problème de connexion à votre serveur';
                console.log(error);
            }
        );*/
    }
}
