import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { calendriercourseR } from '@modules/frontpages/models';
import { CalendriercourseRService } from '@modules/frontpages/services';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'sb-courseRoute',
    templateUrl: './courseRoute.component.html',
    styleUrls: ['./courseRoute.component.scss'],
})
export class CourseRouteComponent implements OnInit {
    errorMessage = '';
    // @ts-ignore
    courseRForm: FormGroup;
    // @ts-ignore
    courseR = new calendriercourseR();
    json: any;
    constructor(
        private calendriercourseRService1: CalendriercourseRService,
        private router: Router) {
    }
    ngOnInit() {
        this.courseRForm = new FormGroup({
            idcourse: new FormControl(null, Validators.required),
            manifestation: new FormControl(null, Validators.required),
            organisateur: new FormControl(null, Validators.required),
            lieu: new FormControl(null, Validators.required),
            niveau: new FormControl(null, Validators.required),
            categorie: new FormControl(null, Validators.required),
            date: new FormControl(null, Validators.required),

        });
        this.courseRForm.setValue({
            idcourse: this.courseR.idcourse,
            manifestation: this.courseR.manifestation,
            organisateur: this.courseR.organisateur,
            lieu: this.courseR.lieu,
            niveau: this.courseR.niveau,
            categorie: this.courseR.categorie,
            date: this.courseR.date,
        });
    }
    onSubmit() {
        this.json = JSON.stringify(this.courseRForm.value);
        console.log(this.json);
        // this.http.put('http://localhost:3000/api/athlete/' +  this.athle.id, this.json, {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json'
        //     })
        // })
        //     .subscribe(responseData => {
        //         console.log(responseData);
        //     });
        this.courseRForm.reset();
    }
    /*addcalendriercourseR(formulaire: NgForm) {
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
