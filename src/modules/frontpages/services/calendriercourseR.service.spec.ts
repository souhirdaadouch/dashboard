import { TestBed } from '@angular/core/testing';

import { calendriercourseR } from '../models/calendriercourseR.model';

describe('calendriercourseRService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: calendriercourseR = TestBed.get(calendriercourseR);
        expect(service).toBeTruthy();
    });
});
