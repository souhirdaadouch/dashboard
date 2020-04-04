import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseRouteComponent } from '@modules/frontpages/containers/competition/containers';

describe('CourseRouteComponent', () => {
    let component: CourseRouteComponent;
    let fixture: ComponentFixture<CourseRouteComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CourseRouteComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CourseRouteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
