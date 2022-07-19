import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = 'http://localhost:3000/api/usuarios'
  }

  registro(values: { username: string, email: string, password: string }): Promise<any> {
    return lastValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/registro`, values)
    );
  }

  login(values: { email: string, password: string }): Promise<any> {
    return lastValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/login`, values)
    );
  }

} 
