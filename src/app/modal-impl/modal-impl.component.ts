import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-modal-impl',
  templateUrl: './modal-impl.component.html',
  styleUrls: ['./modal-impl.component.css']
})
export class ModalImplComponent implements OnInit {
  ngForm: FormGroup;
  @Input("modalFields") modalFields;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  constructor(private fb: FormBuilder) {
  }
  group = {};
  createForm() {
    this.ngForm = this.fb.group(this.group);
  }

  ngOnInit() {
    this.group = this.modalFields.fields.reduce(function (map, obj) {
      var validation = [];
      if (obj.required) {
        validation.push(Validators.required)
      }
      if (obj.pattern) {
        validation.push(Validators.pattern(obj.pattern))
      }
      map[obj.key] = ['', validation];
      return map;
    }, {});
    this.createForm();

  }
  onClose() {
    this.close.emit();
  }

}
