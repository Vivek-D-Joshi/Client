import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';
import { User } from '../_models/user';

@Injectable(
  {providedIn: 'root'}
)
//Service are persist for lifetime of application(till website runs on browser)
export class accountService {
  baseUrl = "https://localhost:7141/"
  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();
  
  constructor(private http: HttpClient) { }
  
  //To transform data or do some operations on data, pipes are used.
  login(model:any){
    return this.http.post<User>(this.baseUrl+"Users/Login",model).pipe(
      map((response:User) => {
        const user = response;
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          
          //To use user's token in other components
          this.currentUserSource.next(user);
        }
      })
    )
  }
  
  register(model:any){
    return this.http.post<User>(this.baseUrl + "Users/Register",model).pipe(
      map(user => {
        if(user){
          localStorage.setItem('user',JSON.stringify(user))
          this.currentUserSource.next(user);
        }
      })
    )
  }
  
  setCurrentUser(user:User){
    this.currentUserSource.next(user);
  }
  
  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}