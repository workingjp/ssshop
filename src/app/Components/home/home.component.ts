import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {



  }

  ngOnInit(): void {

    let thumbnails = document.getElementsByClassName('thumbnail')
    let activeIMG = document.getElementsByClassName('active')
    for (var i = 0; i < thumbnails.length; i++)
    {
      thumbnails[i].addEventListener('mouseover' , function(){
        console.log(activeIMG);
        if(activeIMG.length>0){
          activeIMG[0].classList.remove('active')
        }
        // this.classList.add('active')
        // document.getElementById('featured').src = this.src
      })
    }

   }
  filter(data: any) {
    console.log(data);
  }

}
