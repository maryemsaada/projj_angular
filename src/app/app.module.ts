import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';  
import { FormsModule } from '@angular/forms';  
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddJewelryComponent } from './components/add-jewelry/add-jewelry.component';
import { UpdateJewelryComponent } from './components/update-jewelry/update-jewelry.component';
import { JewelryListComponent } from './components/jewelry-list/jewelry-list.component';
import { JewelryDetailsComponent } from './components/jewelry-details/jewelry-details.component';
import { AdminJewelryManagementComponent } from './components/admin-jewelry-management/admin-jewelry-management.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    AddJewelryComponent,
    UpdateJewelryComponent,
    JewelryListComponent,
    JewelryDetailsComponent,
    AdminJewelryManagementComponent
  ],
  imports: [
    BrowserModule,
    SignupComponent,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}