import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../../../../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user: User = new User;
  userForm: FormGroup;
  hide: boolean = true;

  constructor(private _loginService: LoginService, private _appService: AppService, private _router: Router) {
    this.userForm = new FormGroup({
      userName: new FormControl("", [Validators.required, Validators.minLength(3)]),
      password: new FormControl("", [Validators.required, Validators.minLength(3)]),
    })
  }

  login() {
    this.user = this.userForm.value;
    this._loginService.login(this.user).subscribe(d => {

      if (typeof (window) !== undefined && typeof sessionStorage !== 'undefined')
        sessionStorage.setItem("token", "Bearer " + d.token);
      if (d) {
        this._appService.printAlert(`Welcome! ${this.user.userName}`, "You've logged in successfully!", "success", 2000, false, false, "", "");
        this._router.navigate(["employee/allEmployees"]);
      }
    }
      , error => {
        this._appService.printAlert("Register now!", "You are not registered in the system yet", "error", 2000, false, false, "", "");
      }
    )
  }
}