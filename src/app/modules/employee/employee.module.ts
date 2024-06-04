import { NgModule } from "@angular/core";
import { EmployeeService } from "./services/employee.service";
import { AddEmployeeComponent } from "./components/add-employee/add-employee.component";
import { AllEmployeesComponent } from "./components/all-employees/all-employees.component";
import { ShowEmployeeComponent } from "./components/show-employee/show-employee.component";
import { EmployeeRoutingModule } from "./employee-routing.module";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatNativeDateModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { RoleService } from "./services/role.service";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogActions } from "@angular/material/dialog";
import { LoginService } from "../login/services/login.service";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { AddRoleComponent } from "./components/add-role/add-role.component";
import { PipeIconGender } from "./pipes/PipeIconGender";
import { PipeIconManagement } from "./pipes/PipeIconManagement";
import { AppService } from "../../app.service";
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddEmployeeRoleComponent } from "./components/add-employee-role/add-employee-role.component";

@NgModule({
    declarations: [AddEmployeeComponent, AllEmployeesComponent, ShowEmployeeComponent, AddRoleComponent, PipeIconGender, PipeIconManagement, AddEmployeeRoleComponent],
    imports: [EmployeeRoutingModule, MatDialogActions, HttpClientModule, CommonModule, ReactiveFormsModule, FormsModule, MatFormFieldModule, MatIconModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatCardModule, MatButtonModule, MatInputModule, MatSelectModule, MatGridListModule, MatMomentDateModule, MatPaginatorModule],
    providers: [EmployeeService, RoleService, LoginService, AppService],
    exports: [AddEmployeeComponent]
})
export class EmployeeModule { }
