import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirebaseConnectionService } from '../firebase-connection.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  
  username: string = ''
  password: string = ''
  confirmPassword: string = ''
  status: string = ''
  
  constructor(private fc: FirebaseConnectionService) {

  }
  
  create() {
    if(this.password === this.confirmPassword) {
      this.fc.createUser(this.username, this.password)
      .then(() => {
        this.status = 'Created Account!'
      }, (error: any) => {
        this.status = 'Error'
      })
    }
    console.log('create account clicked!')
  }
  
  
}
