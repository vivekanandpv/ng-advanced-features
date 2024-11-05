import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IfCloneDirective } from './if-clone.directive';
import { ForCloneDirective } from './for-clone.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IfCloneDirective, ForCloneDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  visible = signal(true);
  cities = ['Bengaluru', 'Mumbai', 'Amritsar', 'Chennai', 'Hyderabad'];

  toggle() {
    this.visible.update((v) => !v);
  }
}
