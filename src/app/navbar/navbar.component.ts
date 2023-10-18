import { Component, OnInit } from '@angular/core';
import { accountService } from '../_services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  model:any = {};
  
  constructor(public accountService:accountService) { }
  
  ngOnInit(): void {
  }
  
  login(){
    this.accountService.login(this.model).subscribe({
      next: response => 
      {
        console.log(response)
      },
      error:error => console.log(error) 
    })
  }
  
  logout(){
    this.accountService.logout()
  }
}
