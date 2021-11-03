import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sidebarItemsVar:number;
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("user_type")===null){
      this.sidebarItemsVar=0;
    }else{
      switch (localStorage.getItem("user_type")){
        case "ADMIN":this.sidebarItemsVar=1;break;
        case "USER": this.sidebarItemsVar=2;break;
      }
    }
  }

}
