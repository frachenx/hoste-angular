import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Course } from './course.model';
import { Room } from './room.model';
import { Student } from './student.model';
import { User } from '../user/user.model';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl=environment.baseUrl;

  constructor(private http:HttpClient) { }

  addCourse(course:Course){
    return this.http.post<any>(`${this.baseUrl}add-course.php`,course);
  }

  getCourses(){
    return this.http.get<Course[]>(`${this.baseUrl}courses.php`)
  }

  getCourse(id:string){
    return this.http.get<Course[]>(`${this.baseUrl}edit-course.php?id=${id}`)
  }

  updateCourse(course:Course){
    return this.http.post<any>(`${this.baseUrl}update-course.php`,course)  
  }

  deleteCourse(id:number){
    return this.http.get<any>(`${this.baseUrl}delete-course.php?id=${id}`)
  }

  addRoom(room:Room){
    return this.http.post<any>(`${this.baseUrl}add-room.php`,room)
  }

  getRooms(){
    return this.http.get<Room[]>(`${this.baseUrl}rooms.php`)
  }

  deleteRoom(id:string){
    return this.http.get<any>(`${this.baseUrl}delete-room.php?id=${id}`);
  }

  registerStudent(student:Student){
    return this.http.post<any>(`${this.baseUrl}student-register.php`,student);
  }

  getStudents(){
    return this.http.get<Student[]>(`${this.baseUrl}students.php`);
  }

  deleteStudent(id:string){
    return this.http.get<any>(`${this.baseUrl}delete-student.php?id=${id}`);
  }

  getStudent(id:string){
    return this.http.get<Student>(`${this.baseUrl}view-student.php?id=${id}`);
  }

  getStudentByRegNum(regNum:string){
    return this.http.get<Student>(`${this.baseUrl}studentByRegNum.php?regNum=${regNum}`)
  }

  getUser(id:string){
    return this.http.get<User>(`${this.baseUrl}get-user.php?id=${id}`);
  }

  updateUser(user:User){
    return this.http.post<any>(`${this.baseUrl}update-user.php`,user)
  }

  checkUserPassword(user:any){
    return this.http.post<any>(`${this.baseUrl}checkPassword.php`,user);
  }

  userChangePassword(user:any){
    return this.http.post<any>(`${this.baseUrl}user-change-password.php`,user);
  }

}
