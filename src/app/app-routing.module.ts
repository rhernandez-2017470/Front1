import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EquiposComponent } from "./equipos/equipos.component";
import { HomeComponent } from "./home/home.component";
import { LigasComponent } from "./ligas/ligas.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent}, 
  {path: 'login', component: LoginComponent}, 
  {path: 'register', component: RegisterComponent},
  {path: 'ligas', component: LigasComponent},
  {path: 'equipos', component: EquiposComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }