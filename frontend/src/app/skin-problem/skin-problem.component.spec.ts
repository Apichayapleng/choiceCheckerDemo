import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinProblemComponent } from './skin-problem.component';

describe('SkinProblemComponent', () => {
  let component: SkinProblemComponent;
  let fixture: ComponentFixture<SkinProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkinProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
