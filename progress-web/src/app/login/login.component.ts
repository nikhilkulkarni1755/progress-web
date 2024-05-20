import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirebaseConnectionService } from '../firebase-connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  email: string = ''
  password: string = ''
  status: string = ''

  constructor(private router: Router, private fc: FirebaseConnectionService) {}
  
  login() {
    console.log('username: ' + this.email)
    
    this.fc.login(this.email, this.password).then(() => {
      this.fc.loggedIn()
      this.status = 'Logged in!'
      this.router.navigate(['/home'])
    }, (error: any) => {
      this.status = 'Wrong email and password combination'
    })
    
  }

  forgotPassword() {
    if(this.email !== '') {
      this.fc.forgotPassword(this.email).then(() => {
        this.status = 'Check your email!'
      }, (error: any) => {
        console.log(error)
        this.status = 'error'
      })
    }
    else {
      this.status = 'Enter your username'
    }
 
        
  }
}
