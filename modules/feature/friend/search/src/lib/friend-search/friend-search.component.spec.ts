import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
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
  let friendSearchService: FriendSearchService;

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

    friendSearchService = TestBed.inject(FriendSearchService);
    fixture = TestBed.createComponent(FriendSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should debounce when input field is changed', fakeAsync(() => {
    // ARRANGE
    jest.spyOn(friendSearchService, 'searchByName');
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');

    // ACT
    input.value = 'Alonzo';
    input.dispatchEvent(new Event('input'));
    // ASSERT
    expect(friendSearchService.searchByName).not.toHaveBeenCalled();

    tick(500);

    expect(friendSearchService.searchByName).toHaveBeenCalledWith(input.value);
  }));

  it('should search multiple times', fakeAsync(() => {
    // ARRANGE
    jest.spyOn(friendSearchService, 'searchByName');
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');

    // ACT
    input.value = 'Sherri';
    input.dispatchEvent(new Event('input'));

    tick(500);

    input.value = 'Alonzo';
    input.dispatchEvent(new Event('input'));

    tick(500);

    // ASSERT
    expect(friendSearchService.searchByName).toHaveBeenCalledTimes(2);
  }));

  it('should prevent identical submissions', fakeAsync(() => {
    // ARRANGE
    jest.spyOn(friendSearchService, 'searchByName');
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');

    // ACT
    input.value = 'Alonzo';
    input.dispatchEvent(new Event('input'));

    tick(500);

    input.value = 'Alonzo';
    input.dispatchEvent(new Event('input'));

    tick(500);

    // ASSERT
    expect(friendSearchService.searchByName).toHaveBeenCalledTimes(1);
  }));

  it('should prevent empty submissions', fakeAsync(() => {
    // ARRANGE
    jest.spyOn(friendSearchService, 'searchByName');
    const input: HTMLInputElement =
      fixture.nativeElement.querySelector('input');

    // ACT
    input.value = '';
    input.dispatchEvent(new Event('input'));

    tick(500);

    // ASSERT
    expect(friendSearchService.searchByName).not.toHaveBeenCalled();
  }));

  it('should return friend observable correctly', () => {
    component.friends$.subscribe((result) =>
      expect(result).toEqual(mockFriends)
    );
  });
});
