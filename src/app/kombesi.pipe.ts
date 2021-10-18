import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kombesi'
})
export class KombesiPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (value === 'AL') {
      return 'Albania';
    } else if (value === 'KS') {
      return 'Kosovo';
    }
    return value;
  }

}
