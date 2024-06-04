import { Component, Inject } from '@angular/core';
import { Gender } from '../../models/employee.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrl: './show-employee.component.scss'
})
export class ShowEmployeeComponent {
  genders = Gender;
  constructor(@Inject(MAT_DIALOG_DATA) public employee: any, private dialogRef: MatDialogRef<ShowEmployeeComponent>) { }

  closeDialog() {
    this.dialogRef.close();
  }
}
