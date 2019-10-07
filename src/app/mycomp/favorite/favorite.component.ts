import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor() { }
  @Input()
  isFavorite=false;
  onClick(){
      this.isFavorite=!this.isFavorite;
  }

  ngOnInit() {
  }

}
