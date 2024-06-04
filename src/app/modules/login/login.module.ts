import { NgModule } from "@angular/core";
import { LoginComponent } from "./components/login/login.component";
import { LoginService } from "./services/login.service";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { LoginRoutingModule } from "./login-routing.module";
import { RegisterComponent } from "./components/register/register.component";
import { ConfigService } from "../../services/config.service";

@NgModule({
    declarations: [LoginComponent, RegisterComponent],
    imports: [FormsModule, ReactiveFormsModule, LoginRoutingModule, HttpClientModule, CommonModule, MatFormFieldModule, MatIconModule, MatInputModule],
    providers: [LoginService],
    exports: [LoginComponent]
})
export class LoginModule { }
