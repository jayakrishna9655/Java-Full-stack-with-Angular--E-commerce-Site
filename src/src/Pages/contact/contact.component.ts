import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormsModule, NgForm } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  providers: [NgxSpinnerService, MessageService, ToastModule],
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [FormsModule, RouterLink, RouterOutlet, NgxSpinnerModule, ToastModule,]
})

export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private http: HttpClient, private spinner: NgxSpinnerService, private messageService: MessageService) { }
  ngForm: any

  onSubmit() {
    if (this.contact.name) {
      if (this.contact.email) {
        if (this.contact.message) {
          this.spinner.show();
          this.http.post('http://localhost:8080/api/contact', this.contact)
            .subscribe({
              next: () => {
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message sent and stored!' });
                this.spinner.hide();
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
        else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message is required.' });
        }
      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Email is required.' });
      }
    }
    else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Name is required.' });
    }

  }


}
