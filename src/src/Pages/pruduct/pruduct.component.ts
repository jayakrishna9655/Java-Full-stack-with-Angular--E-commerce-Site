import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CartService } from '../../app/services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pruduct',
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './pruduct.component.html',
  styleUrl: './pruduct.component.css'
})
export class PruductComponent {

  products = [
    { id: 1, name: 'Keyboard', price: 299, image: '/phote/1.jpg' },
    { id: 2, name: 'Stone', price: 99, image: '/phote/2.jpg' },
    { id: 3, name: 'Laptop', price: 599, image: '/phote/3.jpg' },
    { id: 4, name: 'drinks', price: 299, image: '/phote/4.jpg' },
    { id: 5, name: 'watch', price: 99, image: '/phote/5.jpg' },
    { id: 6, name: 'Dress', price: 599, image: '/phote/6.jpg' },
    { id: 7, name: 'Makeup', price: 299, image: '/phote/7.jpg' },
    { id: 8, name: 'Camera', price: 99, image: '/phote/8.jpg' },
    { id: 9, name: 'Milk', price: 599, image: '/phote/9.jpg' },
  ];
  
  constructor(private cartService: CartService) {}
  
  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }
  
}
