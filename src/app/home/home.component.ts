import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerdMode = false;
  users:any;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getusers();
  }
  
  getusers(){
    this.http.get("https://localhost:7141/Users/GetUsers").subscribe({
      next:response => this.users = response,
      error: error => console.log(error),
      complete:() => console.log('Request Complete')
    })
  }
  
  registerModeToggle(){
    this.registerdMode = !this.registerdMode;
  }

  cancelRegisterMode(event : boolean){
    this.registerdMode = event;
  }
}
