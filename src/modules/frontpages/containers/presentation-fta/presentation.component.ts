import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PresentationService } from '@modules/frontpages/services';

@Component({
    selector: 'sb-presentation',
    templateUrl: './presentation.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,

    styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent implements OnInit {
    errorMessage = '';

    // formulaire: NgForm;
    constructor(private presentationService1: PresentationService, private router: Router) {}

    ngOnInit() {}
    /*addpresentation(formulaire: NgForm) {
        /*this.presentationService1.addpresentation(formulaire.value).subscribe(
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
