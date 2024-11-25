import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private restService: RestService) { }


  authenticate(username: string, password: string): Observable<Boolean> {
    return this.restService.authentication(username, password);
  }

  get authenticated(): boolean {
    return this.restService.token != null;
  }

  clear() {
    this.restService.token = null;
  }
}
