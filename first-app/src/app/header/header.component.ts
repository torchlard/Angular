import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service'
import { Cart } from '../const/cart';
import CRITERIA_TYPE from '../const/criteria';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private cartService: CartService) { }
  ngOnInit() {
    this.getCartBuy()
  }

  adv_message_long = ["$10 off every $50 order!", "$20 off every $100 order!", "$30 off every $150 order!"]
  adv_message_short = "Plus $10 off $50 order!"
  company_logo = "assets/icon/homepage/home.jpeg"
  cart_logo = "assets/icon/button/shopping-cart.svg"
  search_icon = "assets/icon/button/search.svg"
  popover_tap = ''

  readonly criterias = ['Collection', 'Color', 'Width', 'Fabric', 'Pattern']
  
  // variable should be initialized
  cart: Cart = {buy: 0}
  getCartBuy(): void {
    this.cartService.getCartBuy()
      .subscribe(cart => this.cart = cart)
    }
    
  showPopover = false
  mouseOver(criteria: string): void {
    this.popover_tap = criteria
  }

  // toggle selected popover
  activate(criteria: string): boolean {
    if (this.popover_tap.length>0 && this.popover_tap === criteria) {
      return true
    }
    return false
  }


}
