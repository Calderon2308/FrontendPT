import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Usuario/login/login.component';
import { CrearComponent } from './Usuario/crear/crear.component';
import { MasterComponent } from './Vista/master/master.component';
import { GeneralComponent } from './Vista/general/general.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'usuario/crear', component: CrearComponent },
  { path: 'admin', component: MasterComponent },
  { path: 'general', component: GeneralComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
