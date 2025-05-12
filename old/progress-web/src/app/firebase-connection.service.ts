import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseConnectionService {

  private isLoggedIn: boolean = false

  constructor(private auth: AngularFireAuth) { }

  login(username: string, password: string) {
    return this.auth.signInWithEmailAndPassword(
      username, password
    )

    // not the most important part of the code for now. 

    // .catch((error) => {
    //   return 'wrong email and password combo'
    // })
  }

  createUser(username: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(
      username, password
    )
  }

  forgotPassword(username: string) {
    return this.auth.sendPasswordResetEmail(username)
  }

  loggedIn() {
    this.isLoggedIn = true
  }
}
