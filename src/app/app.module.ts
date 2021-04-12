import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalImplComponent } from './modal-impl/modal-impl.component';
import { TestModalComponent } from './test-modal/test-modal.component';
import { PlaceholderDirective } from './placeholder.directive';
import { OrderModule } from 'ngx-order-pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormImpComponent } from './form-imp/form-imp.component';
import { ValueArrayPipe } from './value-array.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ModalImplComponent,
    TestModalComponent,
    PlaceholderDirective,
    FormImpComponent,
    ValueArrayPipe
  ],
  imports: [
    BrowserModule,
    OrderModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalImplComponent],
})
export class AppModule { }
