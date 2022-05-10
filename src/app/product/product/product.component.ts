import { Component, OnInit } from '@angular/core';
import {Product} from "../../__models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 products:Product[]=[new Product('iphone 13 ','iph-122','12-10-2022',10000,3,'image/as/as'),
   new Product('ipad  ','ipd-122','12-10-2022',10000,2,'image/as/as'),
   new Product('tesla 13 ','tsl-122','12-10-2022',10000,1,'image/as/as')
 ]
  selectedProduct:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
