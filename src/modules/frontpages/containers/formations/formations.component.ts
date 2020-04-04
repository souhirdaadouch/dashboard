import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { formationService } from '@modules/frontpages/services/formation.service';

@Component({
    selector: 'sb-formations',
    templateUrl: './formations.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,

    styleUrls: ['./formations.component.scss'],
})
export class FormationsComponent implements OnInit {
    errorMessage = '';
    // formulaire: NgForm;
    constructor(private formationService1: formationService, private router: Router) {}

    ngOnInit() {}
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
