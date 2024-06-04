import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from '../../models/employee.model';
import { EmployeeRole } from '../../models/employee-role.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  //veriables
  allRoles: EmployeeRole[] = [];
  myRoles: EmployeeRole[] = [];
  employeeForm: FormGroup;
  employee: Employee = new Employee();
  showFirstPage: boolean;
  showSecondPage: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, private _dialogRef: MatDialogRef<AddEmployeeComponent>, private _formBuilder: FormBuilder) {
    this.employee = data.emp;
    data.roles.forEach(element => {
      this.allRoles.push(new EmployeeRole(element))
    });
    this.createEmployeeForm();
  }

  ngOnInit(): void {
    this.myRoles = this.employee.roles;
    this.showFirstPage = true;
  }

  //dialog
  closeDialog(): void {
    this._dialogRef.close();
  }

  openSecondPage() {
    this.showFirstPage = false;
    this.showSecondPage = true;
    this.employee = this.employeeForm.value;
  }
  return() {
    this.showFirstPage = true;
    this.showSecondPage = false;
  }

  private createEmployeeForm(): void {
    this.employeeForm = this._formBuilder.group({
      firstName: new FormControl(this.employee?.firstName, [Validators.required]),
      lastName: new FormControl(this.employee?.lastName, [Validators.required]),
      identificationNumber: new FormControl(this.employee?.identificationNumber, [Validators.required, this.israeliIdNumberValidator]),
      gender: new FormControl(this.employee?.gender, []),
      dateOfBirth: new FormControl(this.isValidDate(this.employee?.dateOfBirth) ? new Date(this.employee?.dateOfBirth).toISOString().substring(0, 10) : '', [Validators.required, this.validateAge.bind(this)]),
      employmentStartDate: new FormControl(this.isValidDate(this.employee?.employmentStartDate) ? new Date(this.employee?.employmentStartDate).toISOString().substring(0, 10) : '', [Validators.required, this.validateStartDate.bind(this)]),
      status: new FormControl(true),
      roles: this._formBuilder.array(this.employee?.roles)
    });
  }

  //validation to the input
  private israeliIdNumberValidator(control: FormControl): { [key: string]: boolean } | null {
    const id = control.value;
    if (!id || id.length !== 9 || isNaN(id)) {
      return { 'invalidId': true };
    }
    const weightedDigitsSum = Array.from(id, Number)
      .map((digit, i) => digit * ((i % 2) + 1))
      .reduce((sum, digit) => sum + (digit > 9 ? digit - 9 : digit), 0);
    if (weightedDigitsSum % 10 !== 0) {
      return { 'invalidId': true };
    }
    return null; // המספר תקין
  }

  private validateStartDate(): { [key: string]: boolean } | null {
    if (this.employeeForm && this.employeeForm.get('employmentStartDate').value < this.employeeForm.get('dateOfBirth').value)
      return { 'invalidStartDate': true };
    return null;
  }

  private validateAge(control: FormControl): { [key: string]: boolean } | null {
    const birthDate = new Date(control.value);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if (age < 18) {
      return { 'invalidAge': true };
    }
    return null;
  }

  private isValidDate(value: any): boolean {

    const date = new Date(value);
    return !isNaN(date.getTime());
  }
}