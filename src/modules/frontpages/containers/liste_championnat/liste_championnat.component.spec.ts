import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { listechampionnatComponent } from '@modules/frontpages/containers/competition/containers';

describe('listechampionnatComponent', () => {
    let component: listechampionnatComponent;
    let fixture: ComponentFixture<listechampionnatComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [listechampionnatComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(listechampionnatComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
