import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: "", redirectTo: "employee", pathMatch: 'full' },
    { path: "employee", loadChildren: () => import("./modules/employee/employee.module").then(m => m.EmployeeModule) },
    { path: "user", loadChildren: () => import("./modules/login/login.module").then(lm => lm.LoginModule) }
]

