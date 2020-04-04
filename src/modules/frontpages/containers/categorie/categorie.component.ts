import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CategorieService } from '@modules/frontpages/services/categorie.service';

@Component({
    selector: 'sb-categorie',
    templateUrl: './categorie.component.html',
    styleUrls: ['./categorie.component.scss'],
})
export class CategorieComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    /*errorMessage = '';
     constructor(
         private CategorieService1: CategorieService,
         private router: Router) {}
     addcategorie(formulaire: NgForm) {
        /*this.CategorieService1.addcategorie(formulaire.value).subscribe(
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
