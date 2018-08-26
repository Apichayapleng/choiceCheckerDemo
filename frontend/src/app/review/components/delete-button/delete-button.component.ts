import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'delete-button',
  templateUrl: './delete-button.component.html',
  styles: [`
    .invalid {
      display: block;
      color: red;
      font-size: 12px;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class DeleteButtonComponent implements OnInit {
  @Output() onDelete = new EventEmitter();
  valid: string
  modalRef;
  form: FormGroup;
  formErrors: any;

  constructor(private modalService: NgbModal, private formBuilder: FormBuilder) {
    this.valid = '';
  }
  ngOnInit() {
    this.initForm();
  }

  validate() {
    const valid = false
    const password = this.form.value.password
    // api check password
    if (valid) {
      this.modalRef.close();
      this.onDelete.emit(true);
      this.form.reset();
      return;
    }
    this.form.controls.password.setErrors({ invalid: true });
  }

  open(content) {
    this.modalRef = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
    this.modalRef.result.then((result) => {
      console.log(result);
    });
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
