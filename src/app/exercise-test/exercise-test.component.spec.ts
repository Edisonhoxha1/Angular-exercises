import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseTestComponent } from './exercise-test.component';

describe('ExerciseTestComponent', () => {
  let component: ExerciseTestComponent;
  let fixture: ComponentFixture<ExerciseTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
