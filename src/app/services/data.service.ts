import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICooking } from '../interfaces/icooking';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private readonly httpClient: HttpClient) { }

  public getData(): Observable<ICooking[]> {
    return this.httpClient.get<ICooking[]>('assets/data.json');
  }
}
