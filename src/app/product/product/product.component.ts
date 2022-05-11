import { Component, OnInit } from '@angular/core';
import {Product} from "../../__models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 products:Product[]=[new Product(0,'iphone 13 ','iph-122',new Date(),10000,3,'image/as/as'),
   new Product(1,'ipad  ','ipd-122',new Date(),10000,2,'image/as/as'),
   new Product(2,'tesla 13 ','tsl-122',new Date(),10000,1,'image/as/as')
 ]

  addedProduct:Product=new Product();
  displayModal: boolean=false;
  display: boolean = false;

  showImages:boolean=false

  showModalDialog() {
    this.displayModal = true;
  }

  selectedProduct:string='';
  constructor() { }

  ngOnInit(): void {
  }

 toggleShowImages()
 {
   this.showImages=(!this.showImages);
 }
  add()
  {
    this.displayModal=false

    this.products.push(new Product(this.addedProduct.id,this.addedProduct.name,this.addedProduct.code,this.addedProduct.available,this.addedProduct.price,this.addedProduct.rating))
    console.log(this.products)
  }


}
