import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { ImageService } from 'src/app/service/image.service';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreEd: string;
  descripcionEd: string;
  periodoEd: string;
  linkEd: string;
  imgEd: string;

  constructor(
    private activatedRouter: ActivatedRoute,
    private educacionS: EducacionService, 
    private router: Router,
    public imageService: ImageService) {}

  ngOnInit(): void {
  }

  onCreate(): void{
    const educacion = new Educacion(this.nombreEd, this.descripcionEd, this.periodoEd, this.linkEd, this.imgEd);
    this.educacionS.save(educacion).subscribe(
      data => {
        alert("Educación añadida con éxto.");
        this.router.navigate(['']);
      }, err => {
        alert("Error al agregar el Educación");
        this.router.navigate(['']);
      }
    )
    
  }

  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "educacion_" + id;
    this.imageService.uploadImage($event, name)

}
}

