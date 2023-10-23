import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { accountService as AccountService, accountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() cancelRegister = new EventEmitter();
  
  constructor(private accountService: accountService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  
  register(){
    this.accountService.register(this.model).subscribe({
      next: () => {
        this.cancel();
      },
      error:s => this.toastr.error(s.error)
    })
  }
  
  cancel(){
    this.cancelRegister.emit(false);
  }

}
