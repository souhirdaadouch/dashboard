import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendriermastersComponent } from '@modules/frontpages/containers/competition/containers';

describe('CalendriermastersComponent', () => {
    let component: CalendriermastersComponent;
    let fixture: ComponentFixture<CalendriermastersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CalendriermastersComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CalendriermastersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
