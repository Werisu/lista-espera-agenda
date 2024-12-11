import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  FriendSearchService,
  mockFriends,
} from '@lista-espera-agenda/friend-data-access';
import { of } from 'rxjs';
import { FriendSearchComponent } from './friend-search.component';

describe('FriendSearchComponent', () => {
  let component: FriendSearchComponent;
  let fixture: ComponentFixture<FriendSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FriendSearchComponent, NoopAnimationsModule],
      providers: [
        {
          provide: FriendSearchService,
          useValue: { searchByName: () => of(mockFriends) },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FriendSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
