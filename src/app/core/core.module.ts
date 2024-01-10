import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchService } from './services/search.service';
import { ModalService } from './services/modal.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [SearchService, ModalService],
})
export class CoreModule {}
