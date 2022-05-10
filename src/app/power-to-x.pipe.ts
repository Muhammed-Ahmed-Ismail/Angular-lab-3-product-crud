import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerToX'
})
export class PowerToXPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {

    return Math.pow(value,args[0]);
  }

}
