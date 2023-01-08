import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombreP: string;
  descripcionP: string;
  periodoP: string;
  linkP: string;
  imgP: string;

  constructor(
    private activatedRouter: ActivatedRoute,
    private proyectoS: ProyectoService, 
    private router: Router,
    public imageService: ImageService) {}

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyecto = new Proyecto(this.nombreP, this.descripcionP, this.periodoP, this.linkP, this.imgP);
    this.proyectoS.save(proyecto).subscribe(
      data => {
        alert("Proyecto añadida con éxto.");
        this.router.navigate(['']);
      }, err => {
        alert("Error al agregar el Proyecto");
        this.router.navigate(['']);
      }
    )
    
  }

  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "proyecto_" + id;
    this.imageService.uploadImage($event, name)
    
}
}




