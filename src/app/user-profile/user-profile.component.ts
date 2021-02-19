import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  title= "hello";
  firstname: string;
  lastname: string; emailid: string; age :number; state: string; country: string;
  constructor(private myservice: MyserviceService) { 


  }



  ngOnInit() {

    this.firstname=this.myservice.getValue();

   
  }

}
