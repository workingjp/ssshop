import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../Service/cartservice.service';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private _cartService: CartserviceService , private dataservice:DataService) {

  }
  public products: any = [];
  url: string = 'https://localhost:7239/'

  ngOnInit(): void {

    this._cartService.getProducts().subscribe(res =>
      this.products = res
    )

    // this._data.imgGet().subscribe(data => {
    //   this.products = data                          <<<<<<<<<<<<<<<< appliances.ts
    //   console.log(data);
    // })
 
  }
}
