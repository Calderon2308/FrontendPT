import { Component } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Noticia } from '../../Model/Noticia-Model';

@Component({
  selector: 'app-general',
  standalone: false,
  
  templateUrl: './general.component.html',
  styleUrl: './general.component.css'
})
export class GeneralComponent {

  noticia!: Noticia[]
  NoticiaSelect!: Noticia
  show=false
  constructor(private serviceService: ServiceService){

  }

  ngOnInit(){
    this.show=false
    this.serviceService.verNoticias().subscribe(res=>{
      this.noticia= res
      console.log(res)
    })

  }

  noticiaSeleccionada: any = null;

  // Método para seleccionar la noticia
  showNewsDetails(noticia: any): void {
    this.NoticiaSelect=noticia
    this.show=true
    console.log(noticia)
    
  }

}
