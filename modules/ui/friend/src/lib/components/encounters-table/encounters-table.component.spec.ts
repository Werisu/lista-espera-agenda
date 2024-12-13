import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EncountersTableComponent } from './encounters-table.component';

describe('EncountersTableComponent', () => {
  let component: EncountersTableComponent;
  let fixture: ComponentFixture<EncountersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncountersTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EncountersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
