import { Component } from '@angular/core';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  date:any

  constructor() {
    this.getCurrentMonth()
  }
  
  getCurrentMonth() {
    this.date = new Date()

    // console.log(this.date)


  }
}
