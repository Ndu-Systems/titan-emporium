import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtermenu'
})
export class FiltermenuPipe implements PipeTransform {

  transform(list: { name: string }[], key: string): any {
    if (!key) {
      return list || [];
    }
    if (!list) {
      return [];
    }

    return list.filter(x => x.name.includes(key));
  }

}
