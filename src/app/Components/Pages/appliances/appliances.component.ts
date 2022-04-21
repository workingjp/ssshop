import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CartserviceService } from 'src/app/Service/cartservice.service';
import { DataService } from 'src/app/Service/data.service';
import { Image } from './Image';

@Component({
  selector: 'app-appliances',
  templateUrl: './appliances.component.html',
  styleUrls: ['./appliances.component.css']
})
export class AppliancesComponent implements OnInit {
  public productList: any;
  searchKey: string = "";

  constructor(private _dataService: DataService, private _cartService: CartserviceService) { }

  url: string = 'https://localhost:7239/'
  ngOnInit(): void {
    this._dataService.getProduct().subscribe(data => {
      this.appliances  = data
      this.productList = data;
      this.productList.forEach((a: any) => {
        if (a.category === "women's clothing" || a.category === "men's clothing") {
          a.category = "fashion"
        }
        Object.assign(a, { quantity: 1, total: a.price });
      });
      console.log(this.productList)
      console.log(data);
    })   
    this._cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    })

  }

  addtocart(item: any) {
    this._cartService.addtoCart(item);
  }

  appliances: any[] = [];


  onClick(img: any) {
    this._dataService.cartCount.next(1)

    this.appliances.forEach(ss => {
      if (ss.id == img.id) {
        // console.log(ss.name);
        // console.log(ss.img);
        this._dataService.appliance.next(ss)
      }
    });
  }


  image: any = new Image();
  file: any;
  onUpload() {
    let picupload = <File>this.file;
    const formdata = new FormData();
    formdata.append("id", "0")
    formdata.append("documents", picupload, picupload.name)
    formdata.append("documentName", "picupload")
    this._dataService.imgPost(formdata).subscribe(data => {
      return data;
    })
  }

  onChange(event: any) {
    this.file = event.target.files[0]
  }

}
