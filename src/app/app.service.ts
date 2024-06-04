import { Injectable } from "@angular/core";
import Swal from "sweetalert2";
import { EmployeeService } from "./modules/employee/services/employee.service";
import { Employee } from "./modules/employee/models/employee.model";
import { Router } from "@angular/router";

@Injectable()
export class AppService {
    employees: Employee[] = [];

    constructor() { }
    showImage:boolean=true;
    printAlert(title: string, text: string, icon: any, timer: number, confirm: boolean, cancel: boolean, confirmText: string, cancelText: string) {
        return Swal.fire({
            title: title,
            text: text,
            icon: icon,
            showConfirmButton: confirm,
            timer: timer,
            timerProgressBar: true,
            showCancelButton: cancel,
            confirmButtonText: confirmText,
            cancelButtonText: cancelText,
            
        })
    }

    getAllEmployees() {
        return this.employees;
    }
    setEmployees(employees: Employee[]) {
        this.employees = employees;        
    }

    filterEmployees(selectedValue: any, inputToFilter: string): Employee[] {        
        const searchTerm = inputToFilter.toLowerCase();
        this.employees= this.employees?.filter(emp =>
            (selectedValue == undefined || emp.gender == selectedValue) &&
            (emp.firstName.toLowerCase().includes(searchTerm) ||
                emp.lastName.toLowerCase().includes(searchTerm) ||
                emp.identificationNumber.toLowerCase().includes(searchTerm) ||
                emp.gender.toString().includes(searchTerm) ||
                emp.roles.some(r => r.role.roleName.toLowerCase().includes(searchTerm)))
        );
        return this.employees
    }
}
