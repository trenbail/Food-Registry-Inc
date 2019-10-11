  
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html'
})
export class UpdateProfileComponent implements OnInit {

  private selectedLink: string=""; 
  public form: FormGroup;
  public dependenttList: FormArray;       
  
  
  // returns all form groups under contacts
  get contactFormGroup() 
  {
    return this.form.get('contacts') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
	  username: [],
      firstname: [null, Validators.required],
	  passwords : [null, Validators.required],
      mobileno : [null, Validators.required, Validators.pattern(new RegExp('^[0-9]{10}$'))],	
	  subscriptions : [],
    address : [],
    familyinfo : [],
	  email : [null , Validators.required],
	  value : [null, Validators.compose([Validators.required])],
      contacts: this.fb.array([this.createContact()])
    });

    // set dependenttList to this field
    this.dependenttList = this.form.get('contacts') as FormArray;
  }

  // contact formgroup
  createContact(): FormGroup {
    return this.fb.group({
      name: [null, Validators.required], // i.e. Home, Office
      value: [null, Validators.required]
    });
  }

  // add a contact form group
  addContact() {
    this.dependenttList.push(this.createContact());
  }

  // remove contact from group
  removeContact(index) {
    this.dependenttList.removeAt(index);
  }

   // get the formgroup under contacts form array
  getContactsFormGroup(index): FormGroup {
    const formGroup = this.dependenttList.controls[index] as FormGroup;
    return formGroup;
  }

  // method triggered when form is submitted
  submit() {
    console.log(this.form.value);
  }
}