import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'StringSlicePipe'})
export class StringSlicePipe implements PipeTransform {
  transform(value: string): string {
    return value.substring(0,150) + '...';
  }
}