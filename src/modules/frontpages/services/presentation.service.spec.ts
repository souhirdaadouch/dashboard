import { TestBed } from '@angular/core/testing';

import { presentation } from '../models/presentation.model';

describe('PresentationService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: presentation = TestBed.get(presentation);
        expect(service).toBeTruthy();
    });
});
