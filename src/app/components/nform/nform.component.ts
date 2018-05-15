import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-nform',
  templateUrl: './nform.component.html',
  styleUrls: ['./nform.component.scss']
})
export class NformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  public signUpForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    address: new FormGroup({
      country: new FormControl(''),
      city: new FormControl('')
    })
  });

  public addContact(): void {
    (<FormArray>this.signUpForm.get('contacts')).push(
      new FormGroup({
        type: new FormControl(this.contactTypes[0].value),
        value: new FormControl('')
      })
    )
  }

}
