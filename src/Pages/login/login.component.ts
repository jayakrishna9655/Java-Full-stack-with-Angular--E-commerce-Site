import { Component } from '@angular/core';
import { Router } from '@angular/router';  // ✅ Import Router
import { ServicesService } from '../../services.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private service: ServicesService, private router: Router) {}  // ✅ Inject Router

  newTask: any = { UserName: "", Password: "", Email: "" };
  check_email: string = "";
  check_password: string | number = "";
  oldData: any = { UserName: "", Password: "", Email: "" };

  checkdata() {
    this.service.getalldata().subscribe(
      (allUsers) => {
        console.log("Fetched Users:", allUsers);

        // Find user with matching credentials
        const user = allUsers.find(
          (u: Task) => u.Email === this.check_email && u.Password.toString() === this.check_password.toString()
        );

        if (user) {
          alert("Welcome, " + user.UserName);
          this.router.navigate(['/home1']); // ✅ Navigate to home page
        } else {
          alert("Invalid Email or Password");
        }
      },
      (error) => {
        alert("Error fetching data. Please try again later.");
        console.error(error);
      }
    );
  }
}
