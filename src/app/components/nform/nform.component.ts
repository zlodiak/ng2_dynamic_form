import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-nform',
  templateUrl: './nform.component.html',
  styleUrls: ['./nform.component.scss']
})
export class NformComponent implements OnInit {

  public contactTypes: { value: string, title: string }[] = [
    {value: 'phone', title: 'Phone'},
    {value: 'e-mail', title: 'E-mail'},
    {value: 'skype', title: 'Skype'}
  ];

  constructor() {
  }

  ngOnInit() {

  }

  public signUpForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    contacts: new FormArray([])
  });

  public addContact(): void {
    (<FormArray>this.signUpForm.get('contacts')).push(
      new FormGroup({
        type: new FormControl(this.contactTypes[0].value),
        value: new FormControl('')
      })
    )
  }

  public removeContact(i: number): void {
    (<FormArray>this.signUpForm.get('contacts')).removeAt(i);
  }

  public get contacts(): FormArray {
    return <FormArray>this.signUpForm.get('contacts');
  }

}
