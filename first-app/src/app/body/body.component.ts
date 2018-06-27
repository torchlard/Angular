import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  readonly baseUrl = "assets/icon/"
  readonly styles = [
    { title: 'Black', id: 'black', type: 'color', picUrl: this.baseUrl+"types/black@1.5x.jpg"},
    { title: 'Blue', id: 'blue', type: 'color', picUrl: this.baseUrl + "types/blue@1.5x.jpg" },
    { title: 'Collegiate', id: 'collegiate', type: 'collection', picUrl: this.baseUrl + "types/collegiate@1.5x.jpg" },
    { title: 'Cotton', id: 'cotton', type: 'fabric', picUrl: this.baseUrl + "types/cotton@1.5x.jpg" },
    { title: 'Favorites', id: 'favorites', type: 'collection', picUrl: this.baseUrl + "types/favorites@1.5x.jpg" },
    { title: 'Graphic', id: 'graphic', type: 'pattern', picUrl: this.baseUrl + "types/graphic@1.5x.jpg" },
    { title: 'Plaid', id: 'plaid', type: 'pattern', picUrl: this.baseUrl + "types/plaid@1.5x.jpg" },
    { title: 'Silk', id: 'silk', type: 'fabric', picUrl: this.baseUrl + "types/silk@1.5x.jpg" },
    { title: 'Striped', id: 'striped', type: 'pattern', picUrl: this.baseUrl+"types/striped@1.5x.jpg" }
  ]

  readonly displays = [
    {title: 'Tie Bars'},
    {title: 'Solid Satin'},
    {title: 'Popular'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
