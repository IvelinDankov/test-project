import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  users = [
    {
      name: 'Pescho',
      id: 1,
      age: 22,
    },
    {
      name: 'Ivan',
      id: 2,
      age: 24,
    },
    {
      name: 'Velin',
      id: 3,
      age: 25,
    },
    {
      name: 'Gancho',
      id: 4,
      age: 26,
    },
  ];
}
