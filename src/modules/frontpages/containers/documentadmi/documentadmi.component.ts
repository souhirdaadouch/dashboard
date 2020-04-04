import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DocumentService } from '@modules/frontpages/services/document.service';

@Component({
    selector: 'sb-documents',
    templateUrl: './documentadmi.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,

    styleUrls: ['./documentadmi.component.scss'],
})
export class DocumentComponent implements OnInit {
    errorMessage = '';
    // formulaire: NgForm;
    constructor(private documentService1: DocumentService, private router: Router) {}

    ngOnInit() {}
    addDocument(formulaire: NgForm) {
        /*this.documentService1.addDocument(formulaire.value).subscribe(
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
