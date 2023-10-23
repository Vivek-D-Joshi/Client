import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.css']
})
export class TestErrorComponent implements OnInit {
  baseUrl = "https://localhost:7141/"
  constructor(private http: HttpClient) { }
  validationError:string[] = [];

  ngOnInit(): void {
  }
  
  get404Error() {
    this.http.get(this.baseUrl + "Buggy/not-found").subscribe({
      next: response => console.log(response),
      error: error => console.error(error),
    })
  }
  
  get400Error() {
    this.http.get(this.baseUrl + "Buggy/bad-request").subscribe({
      next: response => console.log(response),
      error: error => console.error(error),
    })
  }
  
  get401Error() {
    this.http.get(this.baseUrl + "Buggy/auth").subscribe({
      next: response => console.log(response),
      error: error => console.error(error),
    })
  }
  
  get500Error() {
    this.http.get(this.baseUrl + "Buggy/server-error").subscribe({
      next: response => console.log(response),
      error: error => console.error(error),
    })
  }
  
  get400ValidationError() {
    this.http.post(this.baseUrl + "Users/Register",{}).subscribe({
      next: response => console.log(response),
      error: error => {
        console.error(error),
        this.validationError = error;
      },
    })
  }

}
