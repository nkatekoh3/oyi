import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ntando';
 // tslint:disable-next-line: variable-name
 user_data = [
  {
    id: '1',
    firstName: 'nkateko',
    lastName: 'Hlatshwako',
    email: 'nkatekohlatshwa26@gmail.com"',
    phonenumber: '0660660116'
  }
 ] ;

 data() {
   console.log(this.user_data);
 }
}
