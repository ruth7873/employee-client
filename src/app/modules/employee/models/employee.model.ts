import { EmployeeRole } from "./employee-role.model";

export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  identificationNumber: string;
  employmentStartDate: Date;
  dateOfBirth: Date;
  gender: Gender;
  roles: EmployeeRole[] = [];
  status: boolean;
}

export enum Gender {
  Male,
  Female
}