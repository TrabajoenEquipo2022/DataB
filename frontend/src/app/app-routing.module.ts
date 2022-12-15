import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './routes/admin/admin.component';
import { HomeComponent } from './routes/home/home.component';
import { SignupComponent } from './routes/signup/signup.component';
import { NosotrosComponent } from './routes/nosotros/nosotros.component';

const routes: Routes = [
  {path:"", pathMatch: "full",redirectTo: "/home" },
  
  {path: "home", component: HomeComponent},
  {path: "signup", component: SignupComponent},
  {path: "admin", component: AdminComponent},
  {path: "nosotros", component: NosotrosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
