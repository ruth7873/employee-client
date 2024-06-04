import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AllEmployeesComponent } from "./components/all-employees/all-employees.component";
import { ShowEmployeeComponent } from "./components/show-employee/show-employee.component";
import { AddEmployeeComponent } from "./components/add-employee/add-employee.component";

const APP_ROUTES: Route[] = [
  { path: "", redirectTo: "employee/allEmployees", pathMatch: 'full' },
  { path: "allEmployees", component: AllEmployeesComponent  },
  { path: "detailes", component: ShowEmployeeComponent },
  { path: "add", component: AddEmployeeComponent  },
  { path: "edit", component: AddEmployeeComponent  },
]
@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }