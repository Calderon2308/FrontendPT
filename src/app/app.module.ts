import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Usuario/login/login.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from './Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { CrearComponent } from './Usuario/crear/crear.component';
import { GeneralComponent } from './Vista/general/general.component';
import { MasterComponent } from './Vista/master/master.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CrearComponent,
    GeneralComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
