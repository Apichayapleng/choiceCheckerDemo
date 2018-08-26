import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ValidateModalComponent } from '../../../shared/validate-modal/validate-modal.component';

@Component({
  selector: 'delete-button',
  templateUrl: './delete-button.component.html',
  encapsulation: ViewEncapsulation.None
})
export class DeleteButtonComponent {
  @Output() onDelete = new EventEmitter();

  constructor(private modalService: NgbModal) {}

  open() {
    this.modalService.open(ValidateModalComponent)
      .result.then((result) => {
      if (result) {
        this.onDelete.emit();
      }
    });
  }
}
