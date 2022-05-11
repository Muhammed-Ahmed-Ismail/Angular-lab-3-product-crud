import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "./__models/product";

@Pipe({
  name: 'productsFilter',
  pure:false
})
export class ProductsFilterPipe implements PipeTransform {

  transform(products: Product[],name:string): Product[] {
    return products.filter(product=>{
      return product.name.includes(name);
    });
  }

}
