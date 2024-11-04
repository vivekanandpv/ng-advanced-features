import { Component, Injector, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AsyncPipe, NgComponentOutlet, NgIf } from '@angular/common';
import { defer, Observable } from 'rxjs';
import { FooterComponent } from './footer/footer.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { samplePerson, Person } from '../models/person.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgComponentOutlet, NgIf, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  eagerNavbar = NavbarComponent;

  itemCard = ItemCardComponent;
  injectorForItemCard: Injector;

  lazyNavbar = import('./navbar/navbar.component').then(
    (c) => c.NavbarComponent
  );

  constructor(private appInjector: Injector) {
    this.injectorForItemCard = Injector.create({
      providers: [
        {
          provide: Person, //  interfaces are not supported as types in Angular DI: https://stackoverflow.com/a/37002587/3969961
          useValue: samplePerson,
        },
      ],
    });
  }
}
