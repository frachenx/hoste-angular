import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Course } from '../course.model';
import { Room } from '../room.model';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {
  rooms:Room[]
  courses:Course[]
  result:string="";
  student:Student= new Student();
  sameAddress:boolean
  filteredRooms:Room[]
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.getRooms().subscribe((rooms:Room[])=>{
      console.log(rooms);

      this.rooms = rooms;
      console.log(this.rooms)
    })
    this.adminService.getCourses().subscribe((courses:Course[])=>{
      this.courses = courses;
    })
  }

  roomCombo(){
    console.log(this.student.room);
    this.filteredRooms= this.rooms.filter(room=>room.id==this.student.room);
    this.student.room_seater= this.filteredRooms[0].seater;
    this.student.room_fee= this.filteredRooms[0].fee; 
    console.log(this.rooms)
    console.log(this.filteredRooms)
    console.log(this.student.room_seater)  
    console.log(this.student.room)
  }


  submit(){
    if (this.sameAddress){
      this.student.permAddress=this.student.corrAddress;
      this.student.permCity=this.student.corrCity;
      this.student.permState=this.student.corrState;
      this.student.permPin=this.student.corrPin;
    }else{

    }
    this.adminService.registerStudent(this.student).subscribe(res=>{
      if(res[0].response=="true"){
        this.result  ="1";
        console.log("OK");
        setTimeout(()=>{this.result = ""},1500)
      }else{
        this.result  ="0";
        console.log("NOT OK");
        setTimeout(()=>{this.result = ""},1500)
      }
    });
  }

}
