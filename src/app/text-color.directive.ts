import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[textColor]',
  standalone: true,
})
export class TextColorDirective {
  @HostBinding('style.color')
  @Input()
  textColor?: string;
  constructor() {}
}
