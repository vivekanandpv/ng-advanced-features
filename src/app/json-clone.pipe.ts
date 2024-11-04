import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonClone',
  standalone: true,
  pure: true,
})
export class JsonClonePipe implements PipeTransform {
  transform(value: object): string {
    return JSON.stringify(value);
  }
}
