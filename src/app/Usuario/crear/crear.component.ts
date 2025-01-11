import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../Model/Usuario-model';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-crear',
  standalone: false,

  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearComponent {

  usuarioForm!: FormGroup
  usuario!: Usuario

  constructor(
    private serviceService: ServiceService
  ) {
    this.usuarioForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      fecha_nacimiento: new FormControl(''),
      usuario: new FormControl('', Validators.required),
      contrasena: new FormControl('', Validators.required)
    })

  }

  ngOnInit() {


  }

  guardar() {
    if (this.usuarioForm.valid) {
      this.usuario = this.usuarioForm.value
      this.usuario.idrol=2
      this.serviceService.postCrearUsuario(this.usuario).subscribe(res => { 

      })
    }
  }

}
