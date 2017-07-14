import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalModule, OverlayRenderer, DOMOverlayRenderer, Overlay } from 'angular2-modal';
import { Modal, BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

const MODAL_PROVIDERS = [
  Modal,
  Overlay,
  { provide: OverlayRenderer, useClass: DOMOverlayRenderer }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModalModule,
    BootstrapModalModule
  ],
  providers: [MODAL_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
