import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringMethodExerciseComponent } from './string-method-exercise.component';

describe('StringMethodExerciseComponent', () => {
  let component: StringMethodExerciseComponent;
  let fixture: ComponentFixture<StringMethodExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringMethodExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringMethodExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
