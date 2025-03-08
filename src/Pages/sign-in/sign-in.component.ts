import { Component } from '@angular/core';
import { ServicesService } from '../../services.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule, CommonModule ,RouterOutlet,RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  constructor(private service: ServicesService) {}

  newTask: any = { UserName: "", Password: "", Email: "" };

  createTask(): void {
    if (typeof this.newTask.Password === "number") {
        this.newTask.Password = this.newTask.Password.toString();
    }

    this.service.createTask(this.newTask).subscribe((createdTask) => {
      console.log("Task created:", createdTask);
      this.newTask = { UserName: "", Password: "", Email: "" }; // Reset form
    });
  }
}
