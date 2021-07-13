import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignaturePadModule } from '@ng-plus/signature-pad';

@NgModule({
  imports:      [ BrowserModule, FormsModule, SignaturePadModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
