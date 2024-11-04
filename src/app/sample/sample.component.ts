import { DatePipe, JsonPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { TruncatePipe } from '../truncate.pipe';
import { JsonClonePipe } from '../json-clone.pipe';

@Component({
  selector: 'app-sample',
  standalone: true,
  imports: [DatePipe, NgClass, TruncatePipe, JsonPipe, JsonClonePipe],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.css',
})
export class SampleComponent {
  lorem =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ea maiores voluptatum iusto quo ducimus nihil ratione adipisci sequi ipsam. Dolorem expedita odit iste, ad deserunt sed reprehenderit atque earum!';

  person = {
    firstName: 'John',
    lastName: 'Doe',
  };

  changeFirstName() {
    //  Mutation doesn't trigger the pure pipe
    this.person.firstName = 'Frank';
  }
}
