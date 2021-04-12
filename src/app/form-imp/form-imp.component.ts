import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-imp',
  templateUrl: './form-imp.component.html',
  styleUrls: ['./form-imp.component.css']
})
export class FormImpComponent implements OnInit {

  ngForm: FormGroup;
  @Input("modalFields") modalFields;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  @Output() submit = new EventEmitter<number>();
  constructor(private fb: FormBuilder) {
  }
  group = {};
  createForm() {
    this.ngForm = this.fb.group(this.group);
  }

  submitForm(){
    this.submit.emit();
  }

  ngOnInit() {
    let x = Object.values(this.modalFields.fields);
    this.group = x.reduce(function (map, obj) {
      var validation = [];
      if (obj["required"]) {
        validation.push(Validators.required)
      }
      if (obj["pattern"]) {
        validation.push(Validators.pattern(obj["pattern"]))
      }
      map[obj["key"]] = ['', validation];
      return map;
    }, {});
    // this.group = this.modalFields.forEach(obj => {
    //   debugger
    //   var validation = [];
    //   if (obj.required) {
    //     validation.push(Validators.required)
    //   }
    //   if (obj.pattern) {
    //     validation.push(Validators.pattern(obj.pattern))
    //   }
    //   [obj.key] = ['', validation];
    // });

    this.createForm();

  }
  onClose() {
    this.close.emit();
  }

}
