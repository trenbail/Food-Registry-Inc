  
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html'
})
export class UpdateProfileComponent implements OnInit {

  private selectedLink: string=""; 
  public form: FormGroup;
  public dependenttList: FormArray;       
  
  setradio(e: string): void   
  {  this.selectedLink = e;  }  
  
  isSelected(name: string): boolean   
  {  
    if (!this.selectedLink)  // if no radio button is selected, always return false so every nothing is shown  
     { return false; }  
  
     return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
   }  
  updateprofile(nf:NgForm)
  {
      console.log("Profile Updated successfully !!", nf.value)
  }
  // returns all form groups under contacts
  get contactFormGroup() 
  {
    return this.form.get('contacts') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      contacts: this.fb.array([this.createContact()])
    });

    // set dependenttList to this field
    this.dependenttList = this.form.get('contacts') as FormArray;
  }

  // contact formgroup
  createContact(): FormGroup {
    return this.fb.group({
      type: [], // i.e Email, Phone
      name: [], // i.e. Home, Office
      value: []
    });
  }

  // add a contact form group
  addContact() {
    this.dependenttList.push(this.createContact());
  }

  // remove contact from group
  removeContact(index) {
    // this.dependenttList = this.form.get('contacts') as FormArray;
    this.dependenttList.removeAt(index);
  }

  // get the formgroup under contacts form array
  getContactsFormGroup(index): FormGroup {
    // this.dependenttList = this.form.get('contacts') as FormArray;
    const formGroup = this.dependenttList.controls[index] as FormGroup;
    return formGroup;
  }

  // method triggered when form is submitted
  submit() {
    console.log(this.form.value);
  }
}