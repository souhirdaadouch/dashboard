import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CentreformationService } from '@modules/frontpages/services';

@Component({
    selector: 'sb-centre',
    templateUrl: './centreformation.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,

    styleUrls: ['./centreformation.component.scss'],
})
export class CentreformationComponent implements OnInit {
    errorMessage = '';

    // formulaire: NgForm;
    constructor(private centreService1: CentreformationService, private router: Router) {}

    ngOnInit() {}

    /*addcentre(formulaire: NgForm) {
        this.centreService1.addcentre(formulaire.value).subscribe(
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
