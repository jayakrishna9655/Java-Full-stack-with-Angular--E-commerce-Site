import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../../services.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,
    CommonModule,
    RouterOutlet,
    ToastModule,
    NgxSpinnerModule],
  providers: [NgxSpinnerService, MessageService, ToastModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private service: ServicesService, private router: Router, private spinner: NgxSpinnerService,
    private messageService: MessageService) {
    console.log("login", this.login)
  }

  login = {
    email: '',
    password: ''

  };

  checkdata() {
   
    this.spinner.show();
    console.log("login", this.login)
    this.service.login(this.login).subscribe({
      next: (response) => {
        setTimeout(() => {
          this.spinner.hide();
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login Success:!' });
        }, 2000);
        setTimeout(() => {
          this.router.navigate(['/home1']);
        }, 2000);
      },
      error: (err) => {
        this.spinner.hide();

        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: "Login Failed: " + (err.error?.error || 'Unexpected error occurred.'),
        });

        console.error(err);
      }

    });
  }
}
