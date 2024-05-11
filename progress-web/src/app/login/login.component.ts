import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirebaseConnectionService } from '../firebase-connection.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  username: string = ''
  password: string = ''
  status: string = ''

  constructor(private fc: FirebaseConnectionService) {

  }
  
  login() {
    console.log('username: ' + this.username)
    
    this.fc.login(this.username, this.password).then(() => {
      this.fc.loggedIn()
      this.status = 'Logged in!'
    }, (error: any) => {
      this.status = 'Wrong email and password combination'
    })
    
  }
}
