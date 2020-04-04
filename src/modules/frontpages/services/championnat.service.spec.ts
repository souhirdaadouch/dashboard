import { TestBed } from '@angular/core/testing';
import { ChampionnatService } from '@modules/frontpages/services/championnat.service';

describe('ChampionnatService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: ChampionnatService = TestBed.get(ChampionnatService);
        expect(service).toBeTruthy();
    });
});
