
export class Role {
  id: number;
  roleName: string;
  isManagementRole: boolean;

  constructor(roleId: number, roleName: string, isManagementRole: boolean) {
    this.id = roleId;
    this.roleName = roleName;
    this.isManagementRole = isManagementRole;
  }
}