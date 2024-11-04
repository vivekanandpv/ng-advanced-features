import { Component, Input, ViewContainerRef } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Input() message?: string;
  @Input() year?: number;

  constructor(private viewContainerRef: ViewContainerRef) {
    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(FooterComponent);
  }
}
