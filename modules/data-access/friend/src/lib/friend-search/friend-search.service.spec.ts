import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { mockFriends } from '../mocks/friend.mock';
import { Amigo } from '../models/amigo.model';
import { FriendSearchService } from './friend-search.service';

describe('FriendSearchService', () => {
  let service: FriendSearchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(FriendSearchService);
  });

  it('should return friends correctly', () => {
    const mockName = 'Alonzo';
    const url = `${service.apiUrl}/amigos?name=${mockName}`;
    let result: Amigo[] = [];

    service.searchByName(mockName).subscribe((res) => (result = res));

    const req = httpMock.expectOne(url);
    req.flush(mockFriends);
    expect(req.request.method).toBe('GET');
    expect(result).toEqual(mockFriends);
  });

  it('should return friend by id correctly', () => {
    // ARRANGE
    const mockId = '1';
    const url = `${service.apiUrl}/amigos/${mockId}`;
    let result!: Amigo;

    // ACT
    service.getById(mockId).subscribe((res) => (result = res));

    // ASSERT
    const req = httpMock.expectOne(url);
    req.flush(mockFriends[0]);
    expect(req.request.method).toBe('GET');
    expect(result).toEqual(mockFriends[0]);
  });
});
