import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name = '';
  email = '';
  password = '';
  role = 'USER'; // Default role

  constructor(private authService: AuthService, private router: Router) {}

  signup() {
    const user = { name: this.name, email: this.email, password: this.password, role: this.role };

    this.authService.signup(user).subscribe({
      next: (response) => {
        console.log('Signup successful:', response);
        this.router.navigate(['/login']); // Redirect to login page
      },
      error: (err) => {
        console.error('Signup error:', err);
        alert('Signup failed. Please check your inputs.');
      }
    });
  }
}
