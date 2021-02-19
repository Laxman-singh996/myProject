import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

myModal=20;



onSubmit(data)
{
  console.log(data);
  
}

  constructor(private myservice: MyserviceService) { }

  ngOnInit(): void {

    this.myservice.setValue({firstname:String, lastname:String, email:String, age:Number, state:String, country: String})
    
   
  
  }

}
