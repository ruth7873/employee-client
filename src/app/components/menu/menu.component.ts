import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import Swal from 'sweetalert2';
import { LoginService } from '../../modules/login/services/login.service';
import { AppService } from '../../app.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatIconModule, CommonModule, RouterOutlet, HttpClientModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  isUserLoggedIn: boolean = false;

  constructor(private _router: Router, private _loginService: LoginService, private _appService: AppService) { }

  ngOnInit(): void {
    if (typeof sessionStorage !== 'undefined') {

      this._router.events.subscribe(() => {
        this.isUserLoggedIn = !!sessionStorage.getItem("token");
      });
    }
  }
  async register() {
    Promise<void>
    const { value: password } =
      await Swal.fire({
        title: "Enter an administrator password",
        input: "password",
        inputPlaceholder: "Enter password",
        inputAttributes: {
          maxlength: "10",
          autocapitalize: "off",
          autocorrect: "off"
        },
        showCancelButton: true,
        customClass: {
          input: 'my-input-class'
        }
      });

    if (password) {
      this._loginService.passwordToRegister(password).subscribe(d => {
        this._appService.printAlert("Great", "you are authorized!", "success", 2000, false, false, "", "");
        this._router.navigate(["/user/register"])
      }, error => {
        this._appService.printAlert("wrong password!", "Are you authorized?", "question", 2500, false, false, "", "")
        this._router.navigate(["/user/login"])
      })
    }
  }
}
