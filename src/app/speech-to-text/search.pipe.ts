import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'customerEmailFilter'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args || args === 'all') {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.id.toLocaleLowerCase().includes(args.toLocaleLowerCase())) || (val.email.toLocaleLowerCase().includes(args.toLocaleLowerCase()));
      return rVal;
    })

  }

}
