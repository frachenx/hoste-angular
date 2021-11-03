import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  confirmPassword:string;
  user:User=new User();
  constructor() { }

  ngOnInit(): void {

  }

}
