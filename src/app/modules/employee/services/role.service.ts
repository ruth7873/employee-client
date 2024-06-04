import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../models/role.model';
import { ConfigService } from '../../../services/config.service';

@Injectable()
export class RoleService {

  apiUrl: any;

  constructor(private http: HttpClient, private _configService: ConfigService) {
    this.apiUrl = this._configService.Config?.apiUrl;
    this.apiUrl= `${this.apiUrl}/Roles`;
  }

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(`${this.apiUrl}`);
  }

  getRoleById(id: number): Observable<Role> {
    return this.http.get<Role>(`${this.apiUrl}/${id}`);
  }

  addRole(role: any): Observable<Role> {
    return this.http.post<Role>(`${this.apiUrl}`, role);
  }
}
