import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'StringSlicePipe'})
export class StringSlicePipe implements PipeTransform {
  transform(value: string, exponent: string): string {
    let exp = parseFloat(exponent);
    return value.substring(0,exp) + '...';
  }
}