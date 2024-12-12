import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  mockFriends,
  TopFriendsService,
} from '@lista-espera-agenda/friend-data-access';
import { of } from 'rxjs';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        {
          provide: TopFriendsService,
          useValue: {
            getFriends: () => of(mockFriends),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render friends cards correctly', () => {
    const cards: HTMLElement[] =
      fixture.nativeElement.querySelectorAll('lib-friend-card');
    expect(cards.length).toBe(mockFriends.length);
  });
});
