import { Component, ViewChild } from '@angular/core';
import { ModalComponent} from './shared/modal/modal.component'
import { DialogService } from "ng2-bootstrap-modal";
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  constructor(private modalService: NgbModal){}

  showConfirm(){
    this.modalService.open(ModalComponent)
  }
}
  
  