import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../viewmodel/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
})
export class LogInComponent {

  email: string;
  password: string;
  user: User = new User();

  constructor(private userService: UserService, private router: Router) { }

  login() {
    if (this.email == " " || this.email == null || this.email == "undefined") {
      alert("fill required filed");
    }
    if (this.password == " " || this.password == null || this.password == "undefined") {
      alert("fill required filed");
    }
    else {
      this.user.password = this.password;
      this.user.email = this.email;
      this.userService.login(this.user).subscribe(res => {
        this.router.navigate(['/dashboard']);
      }, (error) => {
          alert("wrong credationals");
      });
    }
  }
}
