import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  apiurl:string = 'http://localhost:5076/api/Products';
  private http = inject(HttpClient);
    constructor() { }

    getproducts(): Observable<any> {
      return this.http.get<any>(this.apiurl).pipe(
        map(res => res)
      );
    }
  }
