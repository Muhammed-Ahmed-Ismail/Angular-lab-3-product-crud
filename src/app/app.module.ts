import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


import { AppComponent } from './app.component';
import { PowerToXPipe } from './power-to-x.pipe';
import { DashReplacerPipe } from './dash-replacer.pipe';
import { CustomFilterPipe } from './custom-filter.pipe';
import {FormsModule} from "@angular/forms";
import {ProductModule} from "./product/product.module";
import { ProductsFilterPipe } from './products-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PowerToXPipe,
    DashReplacerPipe,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
