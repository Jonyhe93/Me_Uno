import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Cliente } from '../interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = 'http://localhost:3000/login';
  }

  getAll(): Promise<Cliente[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token_gym')!
      })
    }

    return lastValueFrom(
      this.httpClient.get<Cliente[]>(this.baseUrl, httpOptions)
    );
  }

  create(values: any): Promise<any> {
    return lastValueFrom(
      this.httpClient.post(this.baseUrl, values)
    );
  }

}
