import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalHelper } from '../../../core/interfaces/modal-helper';
import { ModalService } from '../../../core/services/modal.service';

@Component({
  selector: 'countries-modal',
  templateUrl: './modal.component.html',
  styles: '',
})
export class ModalComponent {
  public modalServiceData$: Observable<ModalHelper>;

  constructor(private modalService: ModalService) {
    this.modalServiceData$ = modalService.countryObservable;
  }

  closeModal() {
    this.modalService.setCountryObservable = { show: false };
  }
}
