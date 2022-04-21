import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';

@Injectable({ 
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  cartCount = new BehaviorSubject<any>(0);
  appliance = new BehaviorSubject<any>([]);

  sqlImg : string = "https://localhost:7239/api/Document";


  // imgGet(): Observable<any>{
  //   return this.http.get(this.sqlImg) <<<<<<<<<<<< easy method
  // }

  getProduct(){
    return this.http.get<any>(this.sqlImg)
    .pipe(map((res:any)=>{
      return res;
    }))
  }


  imgPost(image:any):Observable<any>{
    return this.http.post(this.sqlImg , image)
  }
}
