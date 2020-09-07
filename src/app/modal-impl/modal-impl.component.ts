import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-impl',
  templateUrl: './modal-impl.component.html',
  styleUrls: ['./modal-impl.component.css']
})
export class ModalImplComponent implements OnInit {

  constructor() { }
  @Input("modalFields") modalFields;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  ngOnInit() {
    console.log(this.modalFields)
  }
  onClose() {
    this.close.emit();
}

}
