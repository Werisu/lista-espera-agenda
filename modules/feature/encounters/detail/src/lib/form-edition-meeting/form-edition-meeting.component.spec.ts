import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormEditionMeetingComponent } from './form-edition-meeting.component';

describe('FormEditionMeetingComponent', () => {
  let component: FormEditionMeetingComponent;
  let fixture: ComponentFixture<FormEditionMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEditionMeetingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormEditionMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
