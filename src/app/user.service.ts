import { Injectable } from '@angular/core';
import {User} from "./user";
import {USERS} from "./mock-users";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "http://localhost:8080/Controller";

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url, {params: new HttpParams().set('action', 'GetUsersAngular')});
  }

  setStatus(user: User): void {
    var body = new HttpParams().append('state', user.status).append('userId', user.userid);
    const header = new HttpHeaders().set('Content-Type', "application/x-www-form-urlencoded");
    this.http.post<any>(this.url + '?action=SetStatus&status=' + user.status + "&user=" + user.userid, body, {headers: header}).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    )
  }
}

