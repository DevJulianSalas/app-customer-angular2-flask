import { Component, OnInit, Input } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


export interface ConfirmModel{
  title:string;
  message:string;
}


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {
  @Input() name;

  constructor(public activeModal :NgbActiveModal){}
}
