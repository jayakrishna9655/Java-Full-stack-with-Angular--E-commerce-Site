import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: any[] = []; // Array to store cart items
  cartItems: any[] = [];

  addToCart(product: any) {
    this.cart.push(product);
  }

  getCartItems() {
    return this.cart; // Returns the added products
  }
}
