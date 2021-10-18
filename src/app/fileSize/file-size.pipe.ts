import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]) {
    return (value/ (1024 * 1024)) + 'MB';
  }

}
