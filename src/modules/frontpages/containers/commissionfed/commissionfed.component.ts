import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommissionfedService } from '@modules/frontpages/services';

@Component({
    selector: 'sb-commissionfed',
    templateUrl: './commissionfed.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,

    styleUrls: ['./commissionfed.component.scss'],
})
export class CommissionfedComponent implements OnInit {
    errorMessage = '';

    // formulaire: NgForm;
    constructor(private commissionfedService1: CommissionfedService, private router: Router) {}

    ngOnInit() {}
    /*addmembre(formulaire: NgForm) {
        /*this.commissionfedService1.addcommissionfed(formulaire.value).subscribe(
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
