import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  FriendSearchService,
  mockFriends,
} from '@lista-espera-agenda/friend-data-access';
import { of } from 'rxjs';
import { FriendDetailComponent } from './friend-detail.component';

describe('FriendDetailComponent', () => {
  let component: FriendDetailComponent;
  let fixture: ComponentFixture<FriendDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FriendDetailComponent, RouterTestingModule],
      providers: [
        {
          provide: FriendSearchService,
          useValue: { getById: () => of(mockFriends[0]) },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FriendDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
