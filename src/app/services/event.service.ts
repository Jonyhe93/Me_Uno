import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {


  baseUrl: string = "http://localhost:3000/api/eventos/";
  constructor(private httpClient: HttpClient) { }

  getAll(): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl))
  }
  create(pFormValue: any): Promise<any> {
    return lastValueFrom(
      this.httpClient.post<any>(this.baseUrl, pFormValue)
    )
  }
  delete(pId: number): Promise<any> {
    return lastValueFrom(
      this.httpClient.delete<any>(`${this.baseUrl}/${pId}`)
    )
  }
  getById(pId: any): Promise<any> {
    return lastValueFrom(this.httpClient.get<any>(this.baseUrl + pId))
  }
  update(pFormValue: any) : Promise<any>{ 
    return lastValueFrom(this.httpClient.put<any>(this.baseUrl + pFormValue.id, pFormValue))
  }
}
