import { Pipe, PipeTransform } from '@angular/core';
import { Khachhang } from '../shared/khachhang.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(khachhangs: Khachhang[], term: string): Khachhang[] {
    if(!khachhangs || !term){
      return khachhangs;
    }
    return khachhangs.filter(khachhang => khachhang.name.toLowerCase().includes(term.toLowerCase()));
  }

}
