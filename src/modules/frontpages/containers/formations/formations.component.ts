import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { formationService } from '@modules/frontpages/services/formation.service';
import { formation } from '@modules/frontpages/models';

@Component({
    selector: 'sb-formations',
    templateUrl: './formations.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,

    styleUrls: ['./formations.component.scss'],
})
export class FormationsComponent implements OnInit {
    errorMessage = '';
    // @ts-ignore
    formationForm: FormGroup;
    formation = new formation();
    json: any;
    constructor(private formationService1: formationService, private router: Router) {}

    ngOnInit() {
        this.formationForm = new FormGroup({
            idformation: new FormControl(null, Validators.required),
            activite: new FormControl(null, Validators.required),
            natureactivite: new FormControl(null, Validators.required),
            periode: new FormControl(null, Validators.required),
            lieu: new FormControl(null, Validators.required),
            nbrparticipants: new FormControl(null, Validators.required),
            organisme: new FormControl(null, Validators.required),
            pathcomformation: new FormControl(null, Validators.required),

        });
        this.formationForm.setValue({
            idformation: this.formation.idformation,
            activite: this.formation.activite,
            natureactivite: this.formation.natureactivite,
            periode: this.formation.periode,
            lieu: this.formation.lieu,
            nbrparticipants: this.formation.nbrparticipants,
            organisme: this.formation.organisme,
            pathcomformation: this.formation.pathcomformation,
        });
    }
    onSubmit() {
        this.json = JSON.stringify(this.formationForm.value);
        console.log(this.json);
        // this.http.put('http://localhost:3000/api/athlete/' +  this.athle.id, this.json, {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json'
        //     })
        // })
        //     .subscribe(responseData => {
        //         console.log(responseData);
        //     });
        this.formationForm.reset();
    }
    addformation(formulaire: NgForm) {
        /*this.formationService1.addformation(formulaire.value).subscribe(
            reponse => {
                const link = ['form'];
                this.router.navigate(link);
            },
            error => {
                this.errorMessage = 'Problème de connexion à votre serveur';
                console.log(error);
            }
        );*/
    }
    /*onFileChange(event) {
        const reader = new FileReader();

        if(event.target.files && event.target.files.length) {
            const [file] = event.target.files;
            reader.readAsDataURL(file);

            reader.onload = () => {
                this.formulaire.patchValue({
                    // tslint:disable-next-line:prettier
                    file: reader.result;
                });

                // need to run CD since file load runs outside of zone
                this.cd.markForCheck();
            };
        }
    }*/
}
