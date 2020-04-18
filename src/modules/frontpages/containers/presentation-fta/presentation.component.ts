import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PresentationService } from '@modules/frontpages/services';
import { presentation } from '@modules/frontpages/models';

@Component({
    selector: 'sb-presentation',
    templateUrl: './presentation.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,

    styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent implements OnInit {
    errorMessage = '';
    // @ts-ignore
    presentationForm: FormGroup;
    pres = new presentation();
    json: any;

    constructor(private presentationService1: PresentationService, private router: Router) {}

    ngOnInit() {
        this.presentationForm = new FormGroup({
            idpresentation: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required),
            nbrligue: new FormControl(null, Validators.required),
            nbrclub: new FormControl(null, Validators.required),
            nbrlic: new FormControl(null, Validators.required),
            president: new FormControl(null, Validators.required),

        });
        this.presentationForm.setValue({
            president: this.pres.president,
            nbrlic: this.pres.nbrlic,
            nbrclub: this.pres.nbrclub,
            nbrligue: this.pres.nbrligue,
            description: this.pres.description,
            idpresentation: this.pres.idpresentation,
        });
    }
    onSubmit() {
        this.json = JSON.stringify(this.presentationForm.value);
        console.log(this.json);
        // this.http.put('http://localhost:3000/api/athlete/' +  this.athle.id, this.json, {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json'
        //     })
        // })
        //     .subscribe(responseData => {
        //         console.log(responseData);
        //     });
        this.presentationForm.reset();
    }
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
