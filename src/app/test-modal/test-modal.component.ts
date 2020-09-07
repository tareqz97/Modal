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
      value : null,
      class : ['col-lg-3 col-md-3 col-sm-6'],
      disable : false,
      label : 'First Name',
    },
    {
      key : 'lastName',
      id : 3,
      type : this.getType('input'),
      validation : '',
      visability : true,
      value : null,
      class : ['col-lg-6 col-md-6 col-sm-6'],
      disable : false,
      label : 'Last Name',
    },
    {
      key : 'phoneNumber',
      id : 3,
      type : this.getType('input'),
      validation : '',
      visability : true,
      value : null,
      class : ['col-lg-3 col-md-3 col-sm-6'],
      disable : false,
      label : 'Phone Number',
    },
    {
      key : 'gender',
      id : 3,
      type : this.getType('radio'),
      validation : '',
      visability : true,
      value : 'male',
      class : ['col-lg-3 col-md-3 col-sm-6'],
      disable : false,
      label : 'Gender',
      options : [
        {
          label : 'Male',
          key : 'male'
        },
        {
          label : 'Female',
          key : 'female'
        }
      ],
    },
    {
      key : 'country',
      id : 3,
      type : this.getType('dropdown'),
      validation : '',
      visability : true,
      value : null,
      class : ['col-lg-3 col-md-3 col-sm-6'],
      disable : false,
      label : 'Country',
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
      value : null,
      class : ['col-lg-6 col-md-6 col-sm-6'],
      disable : false,
      label : 'Phone Number',
    },
  ]
}
onShowDynamicModal() {
  this.showDynamic(this.modalFields);
}
private showDynamic (modalFields) {
  const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalImplComponent);
  const hostViewContainerRef = this.alertHost.viewContainerRef;

  // NgModule > entryComponents needs to know about that component
  // entryComponents: [ModalComponent]
  hostViewContainerRef.clear();
  const componentRef = hostViewContainerRef.createComponent(alertComponentFactory);
  componentRef.instance.modalFields = modalFields;
  // componentRef.instance.body = body;

  this.dynamicModalCloseSubscription = componentRef.instance.close.subscribe( () => {
      this.dynamicModalCloseSubscription.unsubscribe();
      hostViewContainerRef.clear();
  });
}
}
