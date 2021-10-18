import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataa'
})
export class DatePipe implements PipeTransform {

  transform(value: string){
    console.log(value);
    return value;
  }

}
