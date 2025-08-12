import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "sign",
    loadComponent: () => import("../Pages/sign-in/sign-in.component")
      .then(m => m.SignInComponent)
  },
  {
    path: "",
    redirectTo: "sign",
    pathMatch: "full"
  },
  {
    path: "login",
    loadComponent: () => import("../Pages/login/login.component")
      .then(m => m.LoginComponent)
  },
  {
    path: "home1",
    loadComponent: () => import("../Pages/home/home.component")
      .then(m => m.HomeComponent)
  },
  {
    path: "product1",
    loadComponent: () => import("../Pages/pruduct/pruduct.component") // Corrected path
      .then(m => m.PruductComponent) // Corrected Component Name
  },
  {
    path: "cart",
    loadComponent: () => import("../Pages/card/card.component") // Corrected directory name
      .then(m => m.CardComponent) // Corrected Component Name
  },
  {
    path: "about",
    loadComponent:()=>import("../Pages/about/about.component")
    .then((m)=>m.AboutComponent)
  },
  {
    path: "contact",
    loadComponent:()=>import("../Pages/contact/contact.component")
    .then((m)=>m.ContactComponent)
  }

];
