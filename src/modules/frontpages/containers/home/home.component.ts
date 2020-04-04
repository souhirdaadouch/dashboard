import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'sb-home',
    templateUrl: './home.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,

    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    myForm: FormGroup;

    constructor() {
        this.myForm = new FormGroup({
            name: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required),
        });
    }

    ngOnInit(): void {
        console.log(this.myForm.value);
    }
}
