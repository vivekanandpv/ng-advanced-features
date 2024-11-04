import { Component } from '@angular/core';

import { TextColorDirective } from '../text-color.directive';
import { TextWeightDirective } from '../text-weight.directive';

@Component({
  selector: 'app-sample',
  standalone: true,
  imports: [],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.css',
  hostDirectives: [
    //  tColor and tWeight will be input properties to sample component; check app template
    {
      directive: TextColorDirective,
      inputs: ['textColor: tColor'],
    },
    {
      directive: TextWeightDirective,
      inputs: ['textWeight: tWeight'],
    },
  ],
})
export class SampleComponent {}
