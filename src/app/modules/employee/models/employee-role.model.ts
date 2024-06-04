import { Employee } from "./employee.model";
import { Role } from "./role.model";

export class EmployeeRole {
  employeeId: number;
  employee: Employee;
  roleId: number;
  role: Role;
  entryDate: Date;

  constructor(role: any) {
    this.role = role;
  }
}
