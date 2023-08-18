import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [

{
  path:'',
  component: HomeComponent,
  pathMatch: 'full'
},
{
  path:'login',
  component:LoginComponent,
  pathMatch: 'full'
},
{
  path:'dashboard',
  component: DashboardComponent,
  pathMatch: 'full',
  canActivate:[AuthGuard] 
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
