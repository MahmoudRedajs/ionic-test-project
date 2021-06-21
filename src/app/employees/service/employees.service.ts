import { Injectable } from '@angular/core';
import { Employee } from '../enployee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private employees: Employee[] = [
    {
      id: '1',
      name: 'Mahmoud Reda',
      age: 25,
      avatar: 'http://www.a2zcompany.net/images/3161003teacher-clip-filipino-3.png',
      adress: ['Egypt', 'Dakhlia', 'munsora']
    },
    {
      id: '2',
      name: 'Yasmen ',
      age: 20,
      avatar: 'https://es2lene.com/upload/avatar2.png',
      adress: ['Egypt', 'giza', '54781']
    },
    {
      id: '3',
      name: 'ali Reda',
      age: 18,
      avatar: 'https://mall-fm.com/media/avatar.png',
      adress: ['Egypt', 'Dakhlia', 'munsora']
    },
    {
      id: '4',
      name: 'mostafa',
      age: 25,
      avatar: 'http://www.a2zcompany.net/images/3161003teacher-clip-filipino-3.png',
      adress: ['phalsten', 'ramalh', '95871']
    },
    {
      id: '5',
      name: 'Omar Osama',
      age: 23,
      avatar: 'https://mall-fm.com/media/avatar.png',
      adress: ['Egypt', 'zakakik', '98571']
    },
  ];

  constructor() { }

  getAllEmployees(){
    return [...this.employees];
  }
  getEmployeeInfo(employeeId: string){
    return {
      ...this.employees.find(emp => {
          return emp.id === employeeId;
      })
    };
  }
  deleteEmployeeInfo(employeeId: string){
    this.employees = this.employees.filter(emp => {
      return emp.id !== employeeId;
    });
    console.log(this.employees);
  }
}
