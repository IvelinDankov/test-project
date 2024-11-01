import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './navigation-bar/navigation-bar-component';
import { FooterComponent } from './footer/footer-component';
import { heroComponent } from './hero-section/hero-section';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationBarComponent,
    heroComponent,
    FooterComponent,
    UserListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'test-project';

  numbers = [1, 2, 3, 4, 5];

  isShown = false;

  randomMsg = 'random-red';

  boberImg =
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.designer.pl%2Fupload%2Fworks%2F1051.1407406444.png%3Fh%3Df68dde7f849fc299d43819948c30823e8d33ef7c&f=1&nofb=1&ipt=461a53e0ce5182b7d569048d988fe9f00bdda7e3bbb9fa959f8d52b87d575717&ipo=images';

  toggleModal(event: Event): void {
    this.randomMsg = this.isShown ? 'random-green' : 'random-red';
    this.isShown = !this.isShown;
  }
}
