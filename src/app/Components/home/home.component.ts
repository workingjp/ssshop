import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {

  }

  images: any = [
    {src: "https://rukminim2.flixcart.com/image/416/416/ku4ezrk0/computer/m/c/n/tp470ea-ec301ts-2-in-1-laptop-asus-original-imag7bh7xub5dsyg.jpeg?q=70"},
    {src: "https://mobirise.com/extensions/commercem4/shoes/assets/images/gallery07-1-1200x800.jpg"},
    {src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7P3IkOP6W0NcSRG4sfb8eHvrKtlSNWFF44g&usqp=CAU"},
    {src: "https://mobirise.com/extensions/commercem4/shoes/assets/images/1-1920x1280.jpg"},

  ]

  ngOnInit(): void {
   }
// ghanu:any=[{src:""}]

//    change(data:any){
//      console.log(data.src);
//      this.ghanu.src = data.src
//    }

   
  filter(data: any) {
    console.log(data);
  }

}
