import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BureaufedService } from '@modules/frontpages/services';

@Component({
    selector: 'sb-bureaufed',
    templateUrl: './bureaufed.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,

    styleUrls: ['./bureaufed.component.scss'],
})
export class BureaufedComponent implements OnInit {
    errorMessage = '';

    // formulaire: NgForm;
    constructor(private bureaufedService1: BureaufedService, private router: Router) {}

    ngOnInit() {}
    /*addmembre(formulaire: NgForm) {
        /*this.bureaufedService1.addbureaufed(formulaire.value).subscribe(
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
