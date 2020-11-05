import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from "../models/cliente-component";
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url: string = 'http://localhost:6060';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(private http: HttpClient) { }

  get(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url + '/list')
  }

  postCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.url + '/createCliente', JSON.stringify(cliente), this.httpOptions)
      .pipe(

      )
  }
}