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
  getType(type){
    switch(type){
      case 'input' : return 1;
      case 'radio' : return 2;
      case 'dropdown' : return 3;
      case 'textarea' : return 4;
    }
  }
  modalFields = {
    title :{
      key : 'title',
      id : 1,
      label : 'Test Modal'
    },
    msg :{
      key : 'msg',
      id : 2,
      label : ''
    },
    fields : [
    {
      key : 'firstName',
      id : 3,
      type : this.getType('input'),
      validation : '',
      visability : true,
      required : true,
      value : null,
      class : ['col-lg-3 col-md-3 col-sm-6'],
      disable : false,
      label : 'First Name',
      order : 1
    },
    {
      key : 'lastName',
      id : 3,
      type : this.getType('input'),
      validation : '',
      visability : true,
      required : true,
      value : null,
      class : ['col-lg-6 col-md-6 col-sm-6'],
      disable : false,
      label : 'Last Name',
      order : 2
    },
    {
      key : 'userName',
      id : 3,
      type : this.getType('input'),
      validation : '',
      visability : true,
      required : true,
      value : null,
      class : ['col-lg-3 col-md-3 col-sm-6'],
      disable : false,
      label : 'User Name',
      order : 3,
      pattern : "^[a-z0-9_-]{8,15}$",
      errorMsg : "not valid."
    },
    {
      key : 'gender',
      id : 3,
      type : this.getType('radio'),
      validation : '',
      visability : true,
      required : true,
      value : 'male',
      class : ['col-lg-3 col-md-3 col-sm-6'],
      disable : false,
      label : 'Gender',
      order : 4,
      options : [
        {
          label : 'Male',
          key : 'male',
          check : true
        },
        {
          label : 'Female',
          key : 'female',
          check : false
        }
      ],
    },
    {
      key : 'country',
      id : 3,
      type : this.getType('dropdown'),
      validation : '',
      visability : true,
      required : true,
      value : null,
      class : ['col-lg-3 col-md-3 col-sm-6'],
      disable : false,
      label : 'Country',
      order : 5,
      dataSource : [
        {
          label : 'Jordan',
          value : 'JOR'
        },
        {
          label : 'United State',
          value : 'USA'
        }
      ],
    },
    {
      key : 'phoneNumber',
      id : 3,
      type : this.getType('input'),
      validation : '',
      visability : true,
      required : false,
      value : null,
      class : ['col-lg-6 col-md-6 col-sm-6'],
      disable : false,
      label : 'Phone Number',
      order : 6
    },
    {
      key : 'comment',
      id : 3,
      type : this.getType('textarea'),
      validation : '',
      visability : true,
      required : true,
      value : null,
      class : ['col-lg-12 col-md-12 col-sm-12'],
      disable : false,
      label : 'Comment',
      rows : 3,
      order : 7
    },
  ]
}
onShowDynamicModal() {
  this.showDynamic(this.modalFields);
}
private showDynamic (modalFields) {
  const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalImplComponent);
  const hostViewContainerRef = this.alertHost.viewContainerRef;
  hostViewContainerRef.clear();
  const componentRef = hostViewContainerRef.createComponent(alertComponentFactory);
  componentRef.instance.modalFields = modalFields;
  this.dynamicModalCloseSubscription = componentRef.instance.close.subscribe( () => {
      this.dynamicModalCloseSubscription.unsubscribe();
      hostViewContainerRef.clear();
  });
}
}
