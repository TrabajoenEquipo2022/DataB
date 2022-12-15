import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './routes/home/home.component';
import { SignupComponent } from './routes/signup/signup.component';
import { AdminComponent } from './routes/admin/admin.component';

import { HttpClientModule } from '@angular/common/http' //-- permite consumir apis con el cliente http de angular
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "./components/footer/footer.component";
import { NosotrosComponent } from './routes/nosotros/nosotros.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AdminComponent,
    HomeComponent,
    SignupComponent,
    NosotrosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
