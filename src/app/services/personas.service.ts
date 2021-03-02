import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonasService {
  constructor(private httpClient: HttpClient) {}

  getAllPersonas(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/persona');
  }

  addPersonas(persona: any) {
    let json = JSON.stringify(persona);
    let header = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.post('http://localhost:8080/persona', json, {
      headers: header,
    });
  }
}
