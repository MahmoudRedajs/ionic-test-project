import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Employee } from '../enployee.model';
import { EmployeesService } from '../service/employees.service';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.page.html',
  styleUrls: ['./employee-info.page.scss'],
})
export class EmployeeInfoPage implements OnInit {

  employeeInfoDetails: Employee;

  constructor(private employeesService: EmployeesService, private router: Router, private alertCrtl: AlertController,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('employeeid')){
        return;
      }
      const emplid = paramMap.get('employeeid');
      this.employeeInfoDetails = this.employeesService.getEmployeeInfo(emplid);
    });
  }

  deleteEmployee(){
    this.alertCrtl.create({
      header: 'You want to Delete !',
      message: 'You will Delete this employee',
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        },
        {
          text: 'Remove',
          handler: () => {
            this.employeesService.deleteEmployeeInfo(this.employeeInfoDetails.id);
            this.router.navigate(['/employees']);
          },
        }
      ],
    }).then(alertV => {
      alertV.present(); // this is show
    });
  }

}
