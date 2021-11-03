import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule,Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';
import { SidebarComboComponent } from './sidebar/sidebar-combo/sidebar-combo.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarDefaultComponent } from './sidebar/sidebar-default/sidebar-default.component';
import { RegistrationComponent } from './main/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './user/profile/profile.component';
import { UserLoginComponent } from './main/user-login/user-login.component';
import { AdminLoginComponent } from './main/admin-login/admin-login.component';
import { AddCourseComponent } from './admin/add-course/add-course.component';

const routes:Routes=[
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:UserLoginComponent},
  {path:'admin-login',component:AdminLoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarItemComponent,
    SidebarComboComponent,
    SidebarComponent,
    SidebarDefaultComponent,
    RegistrationComponent,
    ProfileComponent,
    UserLoginComponent,
    AdminLoginComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
