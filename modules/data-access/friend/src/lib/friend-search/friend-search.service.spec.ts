import { TestBed } from '@angular/core/testing';

import { FriendSearchService } from './friend-search.service';

describe('FriendSearchService', () => {
  let service: FriendSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FriendSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
