import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  username: string = '';
  password: string = '';

  handleLogin(): void {
    // You can add your authentication logic here
    if (this.username === 'admin' && this.password === 'password') {
      // Successful login action
      console.log('Login successful');
    } else {
      // Failed login action
      console.log('Login failed');
    }
  }

}
