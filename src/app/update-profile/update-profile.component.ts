import { Component, OnInit, Input, Renderer2 , ElementRef} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html'
})
export class UpdateProfileComponent implements OnInit {

  private selectedLink: string="";        
  
  setradio(e: string): void   
  {  
  
    this.selectedLink = e;  
          
  }  
  
    isSelected(name: string): boolean   
    {  
    
          if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
              return false;  
          }  
  
        return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
   }  
  updateprofile(nf:NgForm)
  {
    console.log("Profile Updated successfully !!", nf.value)
  }

  addfield()  {
    console.log('function triggered');
    const div = this.renderer.createElement('div');
    const input = this.renderer.createElement('input');

    this.renderer.appendChild(div, input);

    console.log('cross passes the code');
    this.renderer.addClass(input, 'form-control');

    const textboxes = document.getElementById('textboxes');

    this.renderer.appendChild(textboxes, div);
  }

  
  constructor(private renderer:Renderer2, private el: ElementRef) { }

  ngOnInit() {
  }
 
}
