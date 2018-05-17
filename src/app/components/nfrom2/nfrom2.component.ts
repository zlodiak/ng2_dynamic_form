import { Component, OnInit, forwardRef } from '@angular/core';
import { FormGroup, FormControl, FormArray, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CustomSelectComponent } from '../custom-select/custom-select.component';

@Component({
  selector: 'app-nfrom2',
  templateUrl: './nfrom2.component.html',
  styleUrls: ['./nfrom2.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true,
    }
  ]
})
export class Nfrom2Component implements OnInit {

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
