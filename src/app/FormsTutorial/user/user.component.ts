import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  logForm(value: any){
    console.log(value);
    console.log(this.name);
  }

  name: string;
  street: string;
  zip: string;
  phone: string;
  email: string;

  constructor() { }

  ngOnInit() {
  }

}
