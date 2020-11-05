import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aparelho } from "../models/aparelhos-component";
import {  Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { ClienteForm } from '../models/cliente-form-component';
@Injectable({
  providedIn: 'root'
})
export class AparelhoService {

  url: string = 'http://localhost:6060';
  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(private http: HttpClient) { }

  get(): Observable<Aparelho[]> {
    return this.http.get<Aparelho[]>(this.url + '/listAparelho')
  }

  postAparelho(aparelho: Aparelho): Observable<Aparelho> {
    return this.http.post<Aparelho>(this.url + '/createAparelho', JSON.stringify(aparelho), this.httpOptions)
      .pipe(

      )
  }
  getAparelhosByCliente(cliente: ClienteForm): Observable<Aparelho[]> {
    return this.http.post<Aparelho[]>(this.url + '/aparelhoByCliente', JSON.stringify(cliente), this.httpOptions)
      .pipe(

      )
  }

  getAparelho(aparelho: Aparelho): Observable<Aparelho> {
    return this.http.post<Aparelho>(this.url + '/aparelhoById', aparelho);
  }
}