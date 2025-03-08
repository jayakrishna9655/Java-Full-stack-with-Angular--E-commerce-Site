import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';  // Ensure correct path

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()), // ✅ Enables Fetch API
    provideRouter(routes)           // ✅ Provides routing
  ]
});
