import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { accountService as AccountService, accountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() cancelRegister = new EventEmitter();
  
  constructor(private accountService: accountService) { }

  ngOnInit(): void {
  }
  
  register(){
    this.accountService.register(this.model).subscribe({
      next: response => {
        console.log(response);
        this.cancel();
      },
      error:error => console.error(error)
    })
  }
  
  cancel(){
    this.cancelRegister.emit(false);
  }

}
