import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule,Routes} from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
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
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { LogoutComponent } from './main/logout/logout.component';

const routes:Routes=[
  {path:'registration',component:RegistrationComponent},
  {path:'user-login',component:UserLoginComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'logout',component:LogoutComponent}
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
    AddCourseComponent,
    DashboardComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
