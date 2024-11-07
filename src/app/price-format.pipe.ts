import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormat',
  standalone: true
})
export class PriceFormatPipe implements PipeTransform {

  transform(value: number): string {
    if (!value && value !== 0) return '';

    return new Intl.NumberFormat('tr-TR').format(value) + ' TL';
  }



}
