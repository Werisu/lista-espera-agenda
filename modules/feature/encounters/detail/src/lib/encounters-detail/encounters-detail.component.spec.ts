import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EncountersDetailComponent } from './encounters-detail.component';

describe('EncountersDetailComponent', () => {
  let component: EncountersDetailComponent;
  let fixture: ComponentFixture<EncountersDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncountersDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EncountersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
