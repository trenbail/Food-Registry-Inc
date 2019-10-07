import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {
    
    userdata={
        name: 'amar',
        income: 2345,
        rating: 4.8976,
        doj: new Date(),
        description: 'aaaaabbbbbcccccdddddeeeeefffffggggghhhhhiiiiijjjjjkkkkkllllll'
    }

  constructor() { }

  ngOnInit() {
  }

}
