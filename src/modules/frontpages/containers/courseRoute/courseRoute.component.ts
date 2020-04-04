import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CalendriercourseRService } from '@modules/frontpages/containers/competition/services';

@Component({
    selector: 'sb-courseRoute',
    templateUrl: './courseRoute.component.html',
    styleUrls: ['./courseRoute.component.scss'],
})
export class CourseRouteComponent implements OnInit {
    constructor() {}
    ngOnInit() {}

    /*constructor(
        private calendriercourseRService1: CalendriercourseRService,
        private router: Router) {
    }

    errorMessage = '';

    addcalendriercourseR(formulaire: NgForm) {
        this.calendriercourseRService1.addcalendriercourseR(formulaire.value).subscribe(
            reponse => {
                const link = ['ath'];
                this.router.navigate(link);
            },
            error => {
                this.errorMessage = 'Problème de connexion à votre serveur';
                console.log(error);
            },
        );
    }

*/
}
