import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../Model/Usuario-model';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  validateForm!: FormGroup
  ver =false
  constructor(
    private serviceService: ServiceService,
    private router: Router
  ) {
    this.validateForm = new FormGroup({
      usuario: new FormControl('', Validators.required),
      contrasena: new FormControl('', Validators.required)
    })
  }

  ngOnInit(){
    this.ver=false
  }

  enviar() {
    let usu= this.validateForm.value

    console.log(this.validateForm.value)
    this.serviceService.validarUsuario(usu).subscribe(res => { 
      console.log(res)
      if(res == '1'){
        this.router.navigate(['admin'])
      }
      else if(res == '2'){
        this.router.navigate(['general'])
      }
      else if(!res){
        this.ver=true

      }
    })

  }

}
