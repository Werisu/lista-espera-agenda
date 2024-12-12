import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { mockFriends } from '../mocks/friend.mock';
import { Amigo } from '../models/amigo.model';
import { TopFriendsService } from './top-friends.service';

describe('TopFriendsService', () => {
  let service: TopFriendsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(TopFriendsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return top friends correctly', () => {
    // ARRANGE
    const url = `${service.apiUrl}/amigos?page=1&limit=6`;
    let result: Amigo[] = [];

    // ACT
    service.getFriends().subscribe((res) => (result = res));

    // ASSERT
    const req = httpMock.expectOne(url);
    req.flush(mockFriends);
    expect(req.request.method).toBe('GET');
    expect(result).toEqual(mockFriends);
  });
});
