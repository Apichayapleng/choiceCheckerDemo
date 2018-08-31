import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkintypeQuestionComponent } from './skintype-question.component';

describe('SkintypeQuestionComponent', () => {
  let component: SkintypeQuestionComponent;
  let fixture: ComponentFixture<SkintypeQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkintypeQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkintypeQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
