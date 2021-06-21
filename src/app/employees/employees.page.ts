import { Component, OnInit } from '@angular/core';
import { Employee } from './enployee.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit {

  employees: Employee[] = [
    {
      id: '1',
      name: 'Mahmoud Reda',
      age: 25,
      avatar: 'http://www.a2zcompany.net/images/3161003teacher-clip-filipino-3.png',
      adress: ['Egypt', 'Dakhlia', 'munsora']
    },
    {
      id: '1',
      name: 'Mahmoud Reda',
      age: 25,
      avatar: 'https://es2lene.com/upload/avatar2.png',
      adress: ['Egypt', 'Dakhlia', 'munsora']
    },
    {
      id: '1',
      name: 'Mahmoud Reda',
      age: 25,
      avatar: 'https://mall-fm.com/media/avatar.png',
      adress: ['Egypt', 'Dakhlia', 'munsora']
    },
    {
      id: '1',
      name: 'Mahmoud Reda',
      age: 25,
      avatar: 'http://www.a2zcompany.net/images/3161003teacher-clip-filipino-3.png',
      adress: ['Egypt', 'Dakhlia', 'munsora']
    },
    {
      id: '1',
      name: 'Mahmoud Reda',
      age: 25,
      avatar: 'https://mall-fm.com/media/avatar.png',
      adress: ['Egypt', 'Dakhlia', 'munsora']
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
