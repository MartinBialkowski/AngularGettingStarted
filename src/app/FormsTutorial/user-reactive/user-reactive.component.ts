import { ValidationService } from './../validation-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-user-reactive',
  templateUrl: './user-reactive.component.html',
  styleUrls: ['./user-reactive.component.css']
})
export class UserReactiveComponent implements OnInit {

  //One way to do that or FormBuilder
  // registerForm = new FormGroup({
  //   name: new FormControl(),
  //   street: new FormControl(),
  //   zip: new FormControl(),
  //   contact: new FormGroup({
  //     phone: new FormControl(),
  //     email: new FormControl()
  //   })
  // });

  sexes = [`Male`,`Female`,`Unknown`];

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, ValidationService.nateValidator]],
      street: ['', [Validators.required]],
      zip: ['', [Validators.required]],
      phone: ['', [Validators.required, ValidationService.phoneValidator]],
      email: ['', [Validators.required, ValidationService.emailValidator]]
    })
}

  saveUser(value: any){
    console.log(value);
  }
}
