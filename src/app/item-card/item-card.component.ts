import { Component, inject, Input } from '@angular/core';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css',
})
export class ItemCardComponent {
  @Input() message?: string;
  @Input() year?: number;
  person = inject(Person);
}
