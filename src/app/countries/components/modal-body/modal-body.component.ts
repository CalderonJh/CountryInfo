import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from '../../../core/services/modal.service';
import { Country } from '../../../core/interfaces/country';

@Component({
  selector: 'countries-modal',
  templateUrl: './modal-body.component.html',
  styles: '',
})
export class ModalBodyComponent {
  public data$!: Observable<Country>;

  constructor(modalService: ModalService) {
    this.data$ = modalService.countryObservable;
  }
}
