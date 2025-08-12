import { Component } from '@angular/core';
import { ServicesService } from '../../services.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterOutlet,
    RouterLink,
    ToastModule,
    NgxSpinnerModule
  ],
  providers: [NgxSpinnerService, MessageService, ToastModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  constructor(
    private service: ServicesService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private messageService: MessageService
  ) { }

  newTask = {
    userName: "",
    password: "",
    email: ""
  };

  createTask(): void {
    this.spinner.show();


    this.service.createTask(this.newTask).subscribe({
      next: (createdTask) => {
        this.spinner.hide();
        console.log("User registered:", createdTask);
        this.newTask = { userName: "", password: "", email: "" };
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Successfully User registered!' });

        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000); // 3000ms = 3 seconds
      },
      error: (err) => {
        this.spinner.hide();
        //console.error("Signup failed:", res);
        this.messageService.add({ severity: 'error', summary: '', detail: err.error?.message });
      }
    });

  }

}
