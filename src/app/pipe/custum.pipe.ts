import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'upperCase'
})
export class UpperCasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const txt = value.toUpperCase();
    return txt;
  }

}

@Pipe({
  name: 'txtTitle'
})
export class TitleString implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (value.length > args[1]) {
      const title = value.slice(args[0], args[1]) + '...';
      return title;
    }
    return value;
  }
}

@Pipe({
  name: 'take'
})
export class Take implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    console.log(args);
    return value.map(x => {
      if (args[0] === 'even') {
        if (x % 2 === 0) {
          return x + ' ';
        }
      } else if (args[0] === 'odd') {
        if (x % 2 !== 0) {
          return x + ' ';
        }
      } else {
        return x;
      }
    }).filter(Boolean);
  }
}



