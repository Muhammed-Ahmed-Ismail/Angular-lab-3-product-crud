import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import {SharedModule} from "../shared/shared.module";
import {CustomFilterPipe} from "../custom-filter.pipe";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ProductComponent,
    CustomFilterPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
  ],
  exports:[
    ProductComponent
  ]
})
export class ProductModule { }
