import { Component, Input, OnInit } from '@angular/core';
import { EmployeeRole } from '../../models/employee-role.model';
import { Employee } from '../../models/employee.model';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'add-employy-role',
  standalone: false,
  templateUrl: './add-employee-role.component.html',
  styleUrl: './add-employee-role.component.scss'
})
export class AddEmployeeRoleComponent implements OnInit {
  @Input() allRoles: any[];
  @Input() myRoles: any[];
  @Input() employee: Employee;

  availableRoles: any[]
  chooseDate: boolean[] = [];
  entryDate: Date[] = [];

  constructor(private _dialogRef: MatDialogRef<any>) { }

  ngOnInit(): void {
    this.availableRoles = this.allRoles;
    this.myRoles.forEach(r => this.availableRoles = this.availableRoles.filter(rr => rr.role.id != r.role.id));
  }

  saveThisRole(r: EmployeeRole, i: number) {
    r.entryDate = this.entryDate[i];
    r.roleId = r.role.id
    this.myRoles.push(r);
    this.availableRoles = this.availableRoles.filter(ro => !this.myRoles.includes(ro));
    this.entryDate[i] = new Date()
  }

  isValidEntryDate(i: number) {
    return this.entryDate[i] >= this.employee.employmentStartDate;
  }

  removeThisRole(role: EmployeeRole) {
    this.myRoles = this.myRoles.filter(r => r.role.id != role.role.id);
    this.availableRoles.push(role);
  }

  save() {
    this.myRoles.map(r => r.roleId = r.role.id)
    this.employee.roles = this.myRoles;
    this._dialogRef.close(this.employee);
  }
}