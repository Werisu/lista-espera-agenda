import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EncountersCardComponent } from './encounters-card.component';

describe('EncountersCardComponent', () => {
  let component: EncountersCardComponent;
  let fixture: ComponentFixture<EncountersCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncountersCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EncountersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
