import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  async verifyAccount(login: string): Promise<boolean> {
    const response = await fetch('http://localhost:3000/login/verify?' + new URLSearchParams({
      login: login
    }))

    return response.json()
  }

  httpClientVerifyAccount(login: string): Observable<boolean> {
    return this.httpClient.get<boolean>(
      'http://localhost:3000/login/verify',
      {params: {login: login}})
  }

}
