import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenyearQuestionComponent } from './tenyear-question.component';

describe('TenyearQuestionComponent', () => {
  let component: TenyearQuestionComponent;
  let fixture: ComponentFixture<TenyearQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenyearQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenyearQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
