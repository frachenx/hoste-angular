import { Component, OnInit } from '@angular/core';
import { userLogin } from 'src/app/user/user-login.model';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user:userLogin
  constructor() { }

  ngOnInit(): void {
  }

}
