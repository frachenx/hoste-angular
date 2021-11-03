import { Component, OnInit } from '@angular/core';
import { AdminLogin } from 'src/app/admin/admin-login.model';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  admin:AdminLogin
  constructor() { }

  ngOnInit(): void {
  }

}
