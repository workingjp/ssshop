import { Component, OnInit } from '@angular/core';
import { CartserviceService } from 'src/app/Service/cartservice.service';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _cartService: CartserviceService) { }
  public searchTerm !: string;

  public count: number = 0;

  ngOnInit(): void {
    this._cartService.getProducts().subscribe(res => {
      this.count = res.length
    })
  
  }

  
 
}
