import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { actualite } from '@modules/frontpages/models';
import { actualiteService } from '@modules/frontpages/services/actualite.service';
@Component({
    selector: 'sb-actualite',
    templateUrl: './actualite.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./actualite.component.scss'],
})
export class ActualiteComponent implements OnInit {
    errorMessage = '';
    // @ts-ignore
    actuForm: FormGroup;
    actu = new actualite();
    json: any;
    constructor(private actualiteService1: actualiteService, private router: Router) {}

    ngOnInit() {
        this.actuForm = new FormGroup({
            eventId: new FormControl(null, Validators.required),
            eventTitle: new FormControl(null, Validators.required),
            eventDate: new FormControl(null, Validators.required),
            eventComments: new FormControl(null, Validators.required),
            eventImgPath: new FormControl(null, Validators.required),
            eventDescrip: new FormControl(null, Validators.required)
        });
        this.actu.eventId = 0;
        // id te54o ml bouton edit ml router
        this.actu.eventTitle = '';
        this.actu.eventDescrip = 'Description';
        // @ts-ignore
        this.actu.eventDate = 22 - 2020;
        this.actu.eventImgPath = '/User/Desktop';
        this.actu.eventComments = '';
        this.actuForm.setValue({
            eventId: this.actu.eventId,
            eventTitle: this.actu.eventTitle,
            eventDate: this.actu.eventDate,
            eventComments: this.actu.eventComments,
            eventImgPath: this.actu.eventImgPath,
            eventDescrip: this.actu.eventDescrip
        });
    }
    onSubmit() {
        this.json = JSON.stringify(this.actuForm.value);
        console.log(this.json);
        // this.http.put('http://localhost:3000/api/actualite/' +  this.actualite.id, this.json, {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json'
        //     })
        // })
        //     .subscribe(responseData => {
        //         console.log(responseData);
        //     });
        this.actuForm.reset();
    }
    /*addactualite(formulaire: NgForm) {
        this.actualiteService1.addactualite(formulaire.value).subscribe(
            reponse => {
                const link = ['ath'];
                this.router.navigate(link);
            },
            error => {
                this.errorMessage = 'Problème de connexion à votre serveur';
                console.log(error);
            }
        );
    }*/
}
