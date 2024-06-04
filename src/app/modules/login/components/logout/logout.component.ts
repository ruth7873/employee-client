import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../../../app.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})

export class LogoutComponent implements OnInit {
  constructor(private router: Router, private _appServics: AppService) { }
  ngOnInit(): void {
    this._appServics.printAlert("Are you sure?", "You won't be able to revert this!", "warning", null, true, true, "Yes, log out!", "No!!").then((result) => {
      if (result.isConfirmed) {
        if (typeof sessionStorage !== 'undefined') {
          sessionStorage.removeItem("token")
        }
        this.router.navigate(['/user/login'])
        this._appServics.printAlert("Goodbye!", "You successfully logged out!!!", "success", 2000, false, false, "", "");
      }
      else
        this.router.navigate(['employee/allEmployees'])
    });
  }
}
