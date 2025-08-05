import { Component, ChangeDetectorRef } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carddetail',
  imports: [CurrencyPipe, RouterLink ],
  templateUrl: './carddetail.component.html',
  styleUrl: './carddetail.component.css'
})
export class CarddetailComponent {

    logo_aba: string = 'ABA.png';
    logo_acd: string = 'ACD.png';
    logo_khqr: string = 'KHQR.png';


  detailList: any[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    const detailList_: any = localStorage.getItem('listCard');
    this.detailList = detailList_ ? JSON.parse(detailList_) : [];
    console.log("ddddddddd");
  }

  removeItemQuantity(index: number) {
    if (this.detailList[index].quantity > 1) {
      this.detailList[index].quantity--;
      localStorage.setItem('listCard', JSON.stringify(this.detailList));
    }
  }

  addItemQuantity(index: number) {
    this.detailList[index].quantity++;
    localStorage.setItem('listCard', JSON.stringify(this.detailList));
  }

  removeItem(index: number) {
    this.detailList.splice(index, 1); // ✅ Remove item by index
    localStorage.setItem('listCard', JSON.stringify(this.detailList));
    console.log(this.detailList);
    
    this.cdr.detectChanges(); // ✅ Force UI update if needed
  }

  clearAll() {
    this.detailList = [];
    localStorage.removeItem('listCard');
    console.log(this.detailList);
  }

  totalPrice(): number {
  return this.detailList.reduce((sum, item) => sum + (item.price * item.quantity), 0) * 0.8;
}


  goToDetail(id: number) {
    const product = this.detailList.find(item => item.id === id);
    if (product) {
      localStorage.setItem('listDetail', JSON.stringify([product]));
    }
  }

  close() {
    const confirmBox = document.getElementById('confirm') as HTMLDivElement;
    if (confirmBox) {
      (confirmBox as any).hidePopover?.(); // optional chaining to avoid error
    }
  }

}
