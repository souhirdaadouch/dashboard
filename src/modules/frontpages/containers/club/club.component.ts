import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ClubService } from '@modules/frontpages/services';

@Component({
    selector: 'sb-club',
    templateUrl: './club.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,

    styleUrls: ['./club.component.scss'],
})
export class ClubComponent implements OnInit {
    errorMessage = '';

    // formulaire: NgForm;
    constructor(private clubService1: ClubService, private router: Router) {}

    ngOnInit() {}
    /*addclub(formulaire: NgForm) {
        /*this.clubService1.addclub(formulaire.value).subscribe(
            reponse => {
                const link = ['form'];
                this.router.navigate(link);
            },
            error => {
                this.errorMessage = 'Problème de connexion à votre serveur';
                console.log(error);
            }
        );
    }
    onFileChange(event) {
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
        }*/
}
