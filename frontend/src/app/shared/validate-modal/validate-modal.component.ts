import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-basic-title">Admin Password</h4>
      <button type="button" class="close" aria-label="Close"  (click)="activeModal.dismiss()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <form [formGroup]="form">
        <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            class="form-control"
            formControlName="password"
          />
          <div *ngIf="form?.hasError('invalid', ['password'])" class="invalid">
            Password is incorrect
          </div>
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" [disabled]="!form.valid" (click)="validate()">Save</button>
    </div>
  `,
  styles: [`
    .invalid {
      display: block;
      color: red;
      font-size: 12px;
    }
  `],
})
export class ValidateModalComponent implements OnInit {
  form: FormGroup;
  formErrors: any;

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  validate() {
    const valid = true
    const password = this.form.value.password
    // api check password
    console.log('api validate password')
    if (valid) {
      this.activeModal.close(true);
      this.form.reset();
      return;
    }
    this.form.controls.password.setErrors({ invalid: true });
  }

  initForm() {
    this.formErrors = {
      password: {},
    };
    this.form = this.formBuilder.group({
      password: ['', Validators.required],
    });
    this.form.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });
  }

  private onFormValuesChanged(): void {
    for (const field in this.formErrors) {
      if (!this.formErrors.hasOwnProperty(field)) {
        continue;
      }

      // Clear previous errors
      this.formErrors[field] = {};

      // Get the control
      const control = this.form.get(field);

      if (control && control.dirty && !control.valid) {
        this.formErrors[field] = control.errors;
      }
    }
  }
}
