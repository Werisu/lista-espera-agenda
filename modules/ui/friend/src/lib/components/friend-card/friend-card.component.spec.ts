import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mockFriends } from '@lista-espera-agenda/friend-data-access';
import { FriendCardComponent } from './friend-card.component';

describe('FriendCardComponent', () => {
  let component: FriendCardComponent;
  let fixture: ComponentFixture<FriendCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FriendCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FriendCardComponent);
    component = fixture.componentInstance;
    component.friend = mockFriends[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render friend card info correctly', () => {
    const card: HTMLElement =
      fixture.nativeElement.querySelector('.friend-card');
    expect(card.textContent).toContain(component.friend.name);
    expect(card.textContent).toContain(component.friend.cost);
  });
});
