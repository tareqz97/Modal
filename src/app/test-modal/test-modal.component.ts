import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ModalImplComponent } from '../modal-impl/modal-impl.component';
import { Subscription } from 'rxjs';


import { PlaceholderDirective } from '../placeholder.directive';

@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.css']
})
export class TestModalComponent implements OnInit {
  @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;
  private dynamicModalCloseSubscription: Subscription;

  dynamicModalTitleText = 'Dynamic modal title text';
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }
  getType(type) {
    switch (type) {
      case 'input': return 1;
      case 'radio': return 2;
      case 'dropdown': return 3;
      case 'textarea': return 4;
    }
  }
  modalFields = {
    title: {
      key: 'title',
      id: 1,
      label: 'Test Modal'
    },
    msg: {
      key: 'msg',
      id: 2,
      label: ''
    },
    fields: {
      firstName : {
        key: 'firstName',
        id: 3,
        type: this.getType('input'),
        validation: '',
        visability: true,
        required: true,
        value: "Tareq",
        class: ['col-lg-12 col-md-12 col-sm-12'],
        disable: true,
        label: 'First Name',
        order: 1
      },
      lastName: {
        key: 'lastName',
        id: 3,
        type: this.getType('input'),
        validation: '',
        visability: true,
        required: true,
        value: "Ismail",
        class: ['col-lg-12 col-md-12 col-sm-12'],
        disable: false,
        label: 'Last Name',
        order: 2
      },
      userName: {
        key: 'userName',
        id: 3,
        type: this.getType('input'),
        validation: '',
        visability: true,
        required: true,
        value: null,
        class: ['col-lg-3 col-md-3 col-sm-6'],
        disable: false,
        label: 'User Name',
        order: 3,
        pattern: "^[a-z0-9_-]{8,15}$",
        errorMsg: "not valid."
      },
      gender: {
        key: 'gender',
        id: 3,
        type: this.getType('radio'),
        validation: '',
        visability: true,
        required: true,
        value: 'male',
        class: ['col-lg-12 col-md-12 col-sm-12'],
        disable: false,
        label: 'Gender',
        order: 4,
        options: [
          {
            label: 'Male',
            key: 'male',
            check: true
          },
          {
            label: 'Female',
            key: 'female',
            check: false
          }
        ],
      },
      country: {
        key: 'country',
        id: 3,
        type: this.getType('dropdown'),
        validation: '',
        visability: true,
        required: true,
        value: null,
        class: ['col-lg-3 col-md-3 col-sm-6'],
        disable: false,
        label: 'Country',
        order: 5,
        dataSource: [
          {
            label: 'Jordan',
            value: 'JOR'
          },
          {
            label: 'United State',
            value: 'USA'
          }
        ],
      },
      phoneNumber: {
        key: 'phoneNumber',
        id: 3,
        type: this.getType('input'),
        validation: '',
        visability: true,
        required: true,
        value: null,
        class: ['col-lg-6 col-md-6 col-sm-6'],
        disable: false,
        label: 'Phone Number',
        order: 6
      },
      comment: {
        key: 'comment',
        id: 3,
        type: this.getType('textarea'),
        validation: '',
        visability: true,
        required: true,
        value: null,
        class: ['col-lg-12 col-md-12 col-sm-12'],
        disable: false,
        label: 'Comment',
        rows: 3,
        order: 7
      },
    }
  }

  submit() {
    let data = {
      firstName: this.modalFields.fields.firstName.value
    }
    console.log(this.modalFields)
  }
  onShowDynamicModal() {
    this.showDynamic(this.modalFields);
  }
  private showDynamic(modalFields) {
    const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalImplComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    const componentRef = hostViewContainerRef.createComponent(alertComponentFactory);
    componentRef.instance.modalFields = modalFields;
    this.dynamicModalCloseSubscription = componentRef.instance.close.subscribe(() => {
      this.dynamicModalCloseSubscription.unsubscribe();
      hostViewContainerRef.clear();
    });
  }
}
