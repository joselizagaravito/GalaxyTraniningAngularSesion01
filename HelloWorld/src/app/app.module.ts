import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AbcAppComponent } from './abc-app.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AbcAppComponent
  ],
  bootstrap: [AbcAppComponent]
})
export class AppModule { }
