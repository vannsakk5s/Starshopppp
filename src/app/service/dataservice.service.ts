import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
declare const axios:any

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  apiurl:string = 'https://68a3e94cc123272fb9b0bbce.mockapi.io/api/primexs/product';
  private http = inject(HttpClient);

    // private product : any[] = []
    constructor() { 
      // let vm = this
      // let api_url:string = 'https://sv-gen-api.bczin2zin2takeo.us/api/product';
      // axios.get(api_url)
      // .this(function(res:any){
      //   vm.product = res.data
      //   console.log(res.data)
      // })
      // .catch(function(error:any){
      //   console.log(error)
      // })
      // .finally(function(){

      // })
      this.getproducts()
    }

    getproducts(): Observable<any> {
      return this.http.get<any>(this.apiurl).pipe(
        map(res => res)
      );
    }
  }
