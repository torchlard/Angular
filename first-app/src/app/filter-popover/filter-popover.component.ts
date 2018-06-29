import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../const/item';


@Component({
  selector: 'app-filter-popover',
  templateUrl: './filter-popover.component.html',
  styleUrls: ['./filter-popover.component.css']
})
export class FilterPopoverComponent implements OnInit {

  // @Input() filter_type: string

  filter_items: Item[]
  filter = {type: '', showMore: ''}
  tooltip_text = 'Your cart is empty.'
  CRITERIA = {collection: 'collection', color: 'color', width: 'width' }
  others = 'others'
  
  readonly itemUrl = "assets/icon/"
  readonly collections: Item[] = [
    { title: "New Arrivals", description: "The freshest new styles", pic: this.itemUrl+"collection/new.jpg"  },
    { title: "Popular", description: "Your favs. Our best sellers.", pic: this.itemUrl + "collection/popular.jpg" },
    { title: "Favorites", description: "What we're wearing now.", pic: this.itemUrl + "collection/favorites.jpg" },
    { title: "Made in USA", description: "100% American quality.", pic: this.itemUrl + "collection/made-in-usa.png" },
    { title: "Pocket Squares", description: "Add a splash of color.", pic: this.itemUrl + "collection/pocket-squares.jpg" },
    { title: "Tie Bars", description: "Sized just for skinny ties.", pic: this.itemUrl + "collection/tie-bars.jpg" },
  ]

  colors: Item[] = [
    { title: "Blue" ,colorCode: 'blue' },
    { title: "Green",colorCode: 'green' },
    { title: "Yellow",colorCode: 'yellow' },
    { title: "Orange",colorCode: 'orange' },
    { title: "Red",colorCode: 'red' },
    { title: "Purple",colorCode: 'purple' },
    { title: "Pink",colorCode: 'pink' },
    { title: "Brown",colorCode: 'brown'},    
  ]

  widths: Item[] = [
    { title: "Extra Skinny", description: "As thin a they come.", pic: this.itemUrl + "width/extra-skinny.jpg", size: "1.50 inches" },
    { title: "Skinny", description: "Classic skinny protortions", pic: this.itemUrl + "width/skinny.jpg", size: "2.00-2.50 inches" },
    { title: "Narrow", description: "A little thin, not too much", pic: this.itemUrl + "width/narrow.jpg", size: "2.75-3.25 inches" },
  ]

  fabrics: Item[] = [
    { title: "Silk", description: "Premium finish and feel.", pic: this.itemUrl + "fabric/silk.jpg" },
    { title: "Microfiber", description: "Sleek and extra durable.", pic: this.itemUrl + "fabric/microfiber.jpg" },
    { title: "Cotton", description: "A true natural fabric.", pic: this.itemUrl + "fabric/cotton.jpg" },
    { title: "Knit Cotton", description: "Unique woven texture.", pic: this.itemUrl + "fabric/knit-cotton.jpg" },
    { title: "Wool", description: "Roust and warming", pic: this.itemUrl+"fabric/wool.jpg"},
  ]

  patterns: Item[] = [
    { title: "Solid", description: "Simple and effective.", pic: this.itemUrl + "pattern/solid.jpg" },
    { title: "Striped", description: "Modest and assertive.", pic: this.itemUrl + "pattern/striped.jpg" },
    { title: "Plaid", description: "Madras, the hipster staple.", pic: this.itemUrl + "pattern/plaid.jpg" },
    { title: "Graphic", description: "Not your father's Paistey.", pic: this.itemUrl +"pattern/graphic.jpg" }
  ]

  @Input()
  set filter_type(filter_type: string) {
    switch(filter_type){
      case 'Collection':
        this.filter_items = this.collections
        this.filter = {type: this.CRITERIA.collection, showMore: 'Collections'}
        break;
      case 'Color':
        this.filter_items = this.colors
        this.filter = { type: this.CRITERIA.color, showMore: 'Colors'}
        break;
      case 'Width':
        this.filter_items = this.widths
        this.filter = { type: this.CRITERIA.width, showMore: 'Widths'}
        break;
      case 'Fabric':
        this.filter_items = this.fabrics
        this.filter = { type: this.CRITERIA.collection, showMore: 'Fabrics'}
        break;
      case 'Pattern':
        this.filter_items = this.patterns
        this.filter = { type: this.CRITERIA.collection, showMore: 'Patterns'}
        break;
      default:
        this.filter = { type: this.others, showMore: ''}
    }
  }
  

  constructor() { }

  ngOnInit() {
    // this.initPopover()
  }

}
