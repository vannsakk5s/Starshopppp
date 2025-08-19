import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
// import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [ RouterLink ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  // productList : any [] = []


  // constructor(private http: HttpClient) {

  // }

  // get(){
  //   this.http.get("https://6876fb05dba809d901ed9b1d.mockapi.io/products").subscribe((res:any) => {
  //     this.productList = res
  //     // return this.productList
  //     console.log(this.productList)
  //   })
  // };
  

  // Child

  @Input() item: any 
  @Output() cardEvent = new EventEmitter<any>();

  @Input() card: any
  

  addCard(product:any) {
    this.cardEvent.emit(product);
    console.log(product);
  } 
  
  @Output() detailEvent = new EventEmitter<any>();

  addDetail(product:any ) {
    this.detailEvent.emit(product);
  }
  

}

