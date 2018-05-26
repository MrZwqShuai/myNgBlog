import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'StringSlicePipe'})
export class StringSlicePipe implements PipeTransform {
  transform(value: string, exponent: string): string {
    console.log(typeof value, '---------------------', exponent)
    let exp = parseFloat(exponent);
    return value.substring(0,exp) + '...';
  }
}
@Pipe({name: 'ChinesePipe'})
export class ChinesePipe implements PipeTransform {
  transform(value: string, rex: RegExp): string {
    return value.match(/[\u4e00-\u9fa5]+/g) + '...';
  }
}
