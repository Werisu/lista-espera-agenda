import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

const mockTitle = 'Agenda de Amigos';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.title = mockTitle;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain title', () => {
    const header: HTMLHeadingElement =
      fixture.nativeElement.querySelector('.title');
    expect(header.textContent).toBe(mockTitle);

    component.title = 'New title';
    fixture.detectChanges();
    expect(header.textContent).toBe('New title');
  });

  it('should redirect to home when title is clicked', () => {
    const anchor: HTMLAnchorElement =
      fixture.nativeElement.querySelector('.header__logo');
    expect(anchor.getAttribute('href')).toBe('/');
  });
});
