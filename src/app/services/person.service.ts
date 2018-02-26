import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable'
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';


@Injectable()
export class PersonService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get<any>(baseURL);
  }

  findOne(persnr: number): Observable<any> {
    return this.http.get<any>(`${baseURL}/${persnr}`)
  }

  createOne(person:any): Observable<any> {
    return this.http.post(`${baseURL}`, person )
  }

  deleteOne(persnr: number): Observable<any> {
    return this.http.delete(`${baseURL}/${persnr}`);
  }

  updateOne(person: any): Observable<any>{
    return this.http.put(`${baseURL}/${person.persnr}`, person)
  }


}
