import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'keys'})
export class FilterPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      console.log("Data")
      keys.push({key: key, value: value[key]});
      console.log(keys)
    }
    return keys;
  }
}


