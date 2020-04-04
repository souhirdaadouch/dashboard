import { DecimalPipe } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { CompetitionsService } from '@modules/frontpages/containers/competition/services/competitions.service';

describe('CompetitionsService', () => {
    let competitionsService: CompetitionsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CompetitionsService, DecimalPipe],
        });
        competitionsService = TestBed.get(CompetitionsService);
    });
});
