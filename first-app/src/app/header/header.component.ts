import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  adv_message: "$10 off every $50 order! $20 off every $100 order! $30 off every $150 order! "

  compang_log: "../../assets/icon/homepage/home.jpeg"

  criterias: ["Collection", "Color", "Width", "Fabric", "Pattern"]

  cart_logo: "../../assets/icon/button/shopping-cart.svg"
  


  constructor() { }

  ngOnInit() {
  }

}
