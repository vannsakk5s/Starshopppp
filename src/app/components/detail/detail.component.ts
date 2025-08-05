import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterLink, NgIf, NgFor],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  isNavbarOpen = false;

  newlist: any[] = [];
  listCard: any[] = [];
  selectedQuantity: number = 1; // default to 1 bottle

  ngOnInit() {
    const stored = localStorage.getItem('listDetail') ?? '[]';
    this.newlist = JSON.parse(stored);
    console.log(this.newlist);
  }

  trackById(index: number, item: any) {
    return item.id;
  }

  selectQuantity(qty: number) {
    this.selectedQuantity = qty;
    console.log(`Selected quantity: ${qty}`);

  }

  addToBag() {
    if (!this.newlist.length) return;
    const product = this.newlist[0];

    const savedList = localStorage.getItem('listCard') ?? '[]';
    this.listCard = JSON.parse(savedList);

    const existingProduct = this.listCard.find((item: any) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity = this.selectedQuantity;
    } else {
      const newItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        images: product.images,
        quantity: this.selectedQuantity
      };
      this.listCard.push(newItem);
    }

    localStorage.setItem('listCard', JSON.stringify(this.listCard));
    console.log(this.listCard);
  }
}
