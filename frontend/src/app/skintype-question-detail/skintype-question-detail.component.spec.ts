import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkintypeQuestionDetailComponent } from './skintype-question-detail.component';

describe('SkintypeQuestionDetailComponent', () => {
  let component: SkintypeQuestionDetailComponent;
  let fixture: ComponentFixture<SkintypeQuestionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkintypeQuestionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkintypeQuestionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
