import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[textWeight]',
  standalone: true,
})
export class TextWeightDirective {
  @HostBinding('style.fontWeight')
  @Input()
  textWeight?: number;
  constructor() {}
}
