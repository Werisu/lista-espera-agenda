import { TestBed } from '@angular/core/testing';

import { EncountersSearchService } from './encounters-search.service';

describe('EncountersSearchService', () => {
  let service: EncountersSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncountersSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
