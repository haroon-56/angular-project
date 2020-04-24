import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../../viewmodel/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})

export class RegisterComponent {
  constructor(private userService: UserService) { }
  username: string;
  email: string;
  password: string;

  user: User = new User();
 
  register() {
    if (this.username == " " || this.username == null || this.username == "undefined") {
      alert("fill required filed");
    }
    if (this.email == " " || this.email == null || this.email == "undefined") {
      alert("fill required filed");
    }
    if (this.password == " " || this.password == null || this.password == "undefined") {
      alert("fill required filed");
    }
    else {
      this.user.email = this.email;
      this.user.username = this.username;
      this.user.password = this.password;
      this.userService.register(this.user).subscribe(res => {
        alert("register successfully");
      }, error => {
        console.log(error);
      });
    }
  }
}
