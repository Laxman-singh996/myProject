import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
 preform: any

  setValue(data)
  {
    this.preform=data
  }

  getValue()
  {
    return this.preform;
    

  }


  constructor() { }
}
