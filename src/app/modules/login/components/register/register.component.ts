import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../../../../app.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  hide: boolean = true;
  registerForm: FormGroup;
  userName: string = "";
  user: User;
  constructor(private _loginService: LoginService, private _appService: AppService, private router: Router) {
    this.user = new User();
    this.createForm();
  }

  private createForm() {
    this.registerForm = new FormGroup({
      userName: new FormControl(this.user.userName, [Validators.required, Validators.minLength(3)]),
      address: new FormControl(this.user.address, [Validators.required]),
      email: new FormControl(this.user.email, [Validators.required, Validators.email]),
      password: new FormControl(this.user.password, [Validators.required, Validators.minLength(3)]),
    })
  }

  registerNewUser() {
    this.user = this.registerForm.value;
    this._loginService.register(this.user).subscribe({
      next: (res => {
        if (res == undefined)
          this._appService.printAlert(`Oops`, "Username in use, please enter another name!", "error", 2000, false, false, "", "");
        else {
          this._appService.printAlert(`Hi ${this.user?.userName}`, "You have successfully registered!!!", "success", 2000, false, false, "", "");
          this._loginService.login(this.user).subscribe(d => {
            if (typeof sessionStorage !== 'undefined') {
              sessionStorage.setItem("token", "Bearer " + d.token);
            }
            this.router.navigate(["employee/allEmployees"])
          })
        }
      })
    })
  }
}