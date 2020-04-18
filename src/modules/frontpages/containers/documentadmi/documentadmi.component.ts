import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DocumentService } from '@modules/frontpages/services/document.service';
import { document } from '@modules/frontpages/models';

@Component({
    selector: 'sb-documents',
    templateUrl: './documentadmi.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,

    styleUrls: ['./documentadmi.component.scss'],
})
export class DocumentComponent implements OnInit {
    errorMessage = '';
    // @ts-ignore
    docForm: FormGroup;
    doc = new document();
    json: any;
    constructor(private documentService1: DocumentService, private router: Router) {}

    ngOnInit() {
        this.docForm = new FormGroup({
            iddoc: new FormControl(null, Validators.required),
            pathdoc: new FormControl(null, Validators.required),
            typedoc: new FormControl(null, Validators.required),

        });
        this.docForm.setValue({
            iddoc: this.doc.iddoc,
            pathdoc: this.doc.pathdoc,
            typedoc: this.doc.typedoc,
        });
    }
    onSubmit() {
        this.json = JSON.stringify(this.docForm.value);
        console.log(this.json);
        // this.http.put('http://localhost:3000/api/athlete/' +  this.athle.id, this.json, {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json'
        //     })
        // })
        //     .subscribe(responseData => {
        //         console.log(responseData);
        //     });
        this.docForm.reset();
    }
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
