import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {AuthGuard} from "./guard/auth.guard";
import {NotFoundComponent} from "./not-found/not-found.component";


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  // {path: 'registration', component: RegistrationComponent},
  {path: '', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard]},
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
