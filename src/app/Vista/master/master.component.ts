import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  ) {
    this.newsForm = new FormGroup({
      titulo: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required)
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

  save(){
    if(this.newsForm.valid){
      const formData = new FormData();
      formData.append('data', this.newsForm.value);
      if (this.newsForm.get('imagen')?.value) {
        formData.append('imagen', this.newsForm.get('imagen')?.value);
      }
      console.log('Formulario enviado', formData);
    }
  }

}
