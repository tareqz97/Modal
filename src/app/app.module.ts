import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalImplComponent } from './modal-impl/modal-impl.component';
import { TestModalComponent } from './test-modal/test-modal.component';
import { PlaceholderDirective } from './placeholder.directive';

@NgModule({
  declarations: [
    AppComponent,
    ModalImplComponent,
    TestModalComponent,
    PlaceholderDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalImplComponent],
})
export class AppModule { }
