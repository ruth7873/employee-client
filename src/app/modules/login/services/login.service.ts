import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user.model";
import { ConfigService } from "../../../services/config.service";
import { initializeConfig } from "../../../app.config";

@Injectable()
export class LoginService {
  apiUrl: any;

  constructor(private http: HttpClient, private _configService: ConfigService) {    
    this.apiUrl = this._configService.Config?.apiUrl;
  }

  login(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Auth`, user);
  }
  register(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Users`, user);
  }
  passwordToRegister(password: string): Observable<boolean> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>(`${this.apiUrl}/Register`, JSON.stringify(password), httpOptions);
  }
}