import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  credentials = {
    email: '',
    password: '',
  };

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('form is submitted');

    console.log(this.credentials);
    

    if (
      this.credentials.email != '' &&
      this.credentials.password != '' &&
      this.credentials.email != null &&
      this.credentials.password != null
    ) {
      console.log('We have to submit the form to server');

// token generate
this.loginService.generateToken(this.credentials).subscribe(
  (response:any) => {

    // success
    console.log(response.jwtToken);

    this.loginService.loginUser(response.jwtToken);

    window.location.href="/dashboard";
    
  },
  error => {
    // error
    console.log(error);
  }
  
)



    } else {
      console.log('Fields are empty !!');
    }
  }
}
