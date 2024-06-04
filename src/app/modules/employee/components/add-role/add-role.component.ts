import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-role',
  standalone: false,
  templateUrl: './add-role.component.html',
  styleUrl: './add-role.component.scss'
})
export class AddRoleComponent {
  roleForm: FormGroup;
  constructor(private dialogRef: MatDialogRef<any>) {
    this.roleForm = new FormGroup({
      roleName: new FormControl('', [Validators.required]),
      isManagementRole: new FormControl('', [Validators.required])
    })
  }
  addRole() {
    this.dialogRef.close(this.roleForm.value);
  }
}
