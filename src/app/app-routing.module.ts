import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddJewelryComponent } from './components/add-jewelry/add-jewelry.component';
import { UpdateJewelryComponent } from './components/update-jewelry/update-jewelry.component';
import { JewelryListComponent } from './components/jewelry-list/jewelry-list.component';
import { JewelryDetailsComponent } from './components/jewelry-details/jewelry-details.component';
import { AdminJewelryManagementComponent } from './components/admin-jewelry-management/admin-jewelry-management.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'add-jewelry', component: AddJewelryComponent },
  { path: 'update-jewelry', component: UpdateJewelryComponent },
  { path: 'jewelry-list', component: JewelryListComponent },
  { path: 'jewelry-details', component: JewelryDetailsComponent },
  { path: 'admin-jewelry-management', component: AdminJewelryManagementComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirection par défaut
  { path: '**', redirectTo: '/login' } // Gère les chemins non définis
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
