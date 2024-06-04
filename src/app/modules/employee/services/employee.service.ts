import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "../models/employee.model";
import { Router } from "@angular/router";
import { AppService } from "../../../app.service";
import { ConfigService } from "../../../services/config.service";

@Injectable()
export class EmployeeService {
    constructor(private _http: HttpClient, private _router: Router, private _appService: AppService, private _configService: ConfigService) {
        console.log(this._configService);        
        this.apiUrl = this._configService.Config?.apiUrl;
        this.apiUrl=`${this.apiUrl}/Employees`;
    }
    apiUrl: any;
    token: any;
    headers: any;
    authorization() {
        if (typeof sessionStorage !== 'undefined' && sessionStorage?.getItem("token")) {
            this.token = sessionStorage?.getItem("token")
            this.headers = new HttpHeaders({ 'Authorization': this.token });
        } else {
            this._appService.printAlert(`Unauthorized error!!!`, "You are not authorized to access this resource", "error", 2000, false, false, "", "");
            this._router.navigate(["/user/login"])
        }
    }

    getEmployees(): Observable<Employee[]> {
        this.authorization()
        return this._http.get<Employee[]>(`${this.apiUrl}`, { "headers": this.headers });
    }

    getEmployeeById(id: number): Observable<Employee> {
        this.authorization()
        return this._http.get<Employee>(`${this.apiUrl}/${id}`);
    }

    addEmployee(newEmployee: Employee): Observable<Employee> {
        this.authorization()
        return this._http.post<Employee>(`${this.apiUrl}`, newEmployee, { "headers": this.headers });
    }

    updateEmployee(employee: Employee): Observable<Employee> {
        this.authorization()
        return this._http.put<Employee>(`${this.apiUrl}/${employee.id}`, employee, { "headers": this.headers });
    }

    deleteEmployee(id: number): Observable<void> {
        this.authorization()
        return this._http.delete<void>(`${this.apiUrl}/${id}`, { "headers": this.headers });
    }
}
