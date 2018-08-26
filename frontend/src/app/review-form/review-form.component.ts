import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ValidateModalComponent } from '../shared/validate-modal/validate-modal.component';

@Component({
  selector: 'app-review',
  templateUrl: './review-form.component.html',
  styles: [`
    .thumbnail {
      display: block;
      width: 150px;
      height: 150px;
      object-fit: contain;
      border: 1px solid #d9d9d9;
      margin: 15px;
      margin-top: 0px;
    }
  `],
})
export class ReviewFormPageComponent implements OnInit {
  form: FormGroup;
  formErrors: any;
  modules = {};
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.modules = {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ 'header': 1 }, { 'header': 2 }],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['clean'],
        ['link', 'image', 'video']
      ],
    }
    this.initForm();
  }

  ngOnInit() {
  }

  initForm() {
    this.formErrors = {
      id: {},
      type: {},
      topic: {},
      thumbnail: {},
      body: {},
    };
    this.form = this.formBuilder.group({
      id: [''],
      type: ['community', Validators.required],
      topic: ['', Validators.required],
      thumbnail: ['', Validators.required],
      body: ['', Validators.required],
    });
    this.form.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });
  }

  onChange(event) {
    this.form.controls.body.patchValue(event.html);
  }

  async onFileChange(event) {
    const base64 = await this.getBase64(event.target.files[0]);
    this.form.controls.thumbnail.patchValue(base64);
  }

  onCancel() {
    this.form.reset();
  }

  onSubmit() {
    // api create review
    const form = this.form.value;
    if (form.type === 'admin') {
      this.modalService.open(ValidateModalComponent)
        .result.then((result) => {
        if (result) {
          console.log('api create review for admin: ' + form)
          const id = 1
          this.router.navigate(['/review', id]);
        }
      });
    } else {
      console.log('api create review for community: ' + form)
      const id = 1
      this.router.navigate(['/review', id]);
    }
  }

  private getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
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
