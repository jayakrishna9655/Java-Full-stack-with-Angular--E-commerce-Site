import { Component, OnInit } from '@angular/core';
import { CartService } from '../../app/services/cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [CommonModule,RouterOutlet,RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{

  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

}
