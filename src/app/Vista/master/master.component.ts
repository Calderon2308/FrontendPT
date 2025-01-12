import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Noticia } from '../../Model/Noticia-Model';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-master',
  standalone: false,

  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {
  newsForm!: FormGroup
  imagePreview: string | ArrayBuffer | null = null;

  constructor(
    private serviceService: ServiceService,
  ) {
    this.newsForm = new FormGroup({
      titulo: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      contenido: new FormControl('', Validators.required)
    })
  }

  onImageChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
      this.newsForm.patchValue({ imagen: file });
    }
  }

  save() {
    if (this.newsForm.valid) {


      var data: Noticia = this.newsForm.value

      data.fecha_creacion = new Date()
      data.contenido = this.newsForm.get('contenido')?.value
      console.log(data)
      this.serviceService.CrearNoticia(data).subscribe(res => {
        console.log(res)
      })



    }
  }

}
