import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';  // Ensure correct path
import { NgxSpinnerModule } from 'ngx-spinner';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
      provideAnimations(),
    provideHttpClient(withFetch()), // ✅ Enables Fetch API
    provideRouter(routes)  ,         // ✅ Provides routing
     importProvidersFrom(NgxSpinnerModule),
  ]
});
