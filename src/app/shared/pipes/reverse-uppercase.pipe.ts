import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'reverseUppercase',
  standalone: true
})
export class ReverseUppercasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;

    const [first, ...rest] = value.split('');
    return first + rest.join('').toUpperCase();
  }

}
