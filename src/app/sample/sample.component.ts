import { DatePipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  standalone: true,
  imports: [DatePipe, NgClass],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.css',
})
export class SampleComponent {
  today = new Date();
}
