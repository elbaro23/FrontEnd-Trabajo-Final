import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ImageService } from 'src/app/service/image.service';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string;
  descripcionE: string;
  periodoE: string;
  linkE: string;
  imgE: string;

  constructor(
    private activatedRouter: ActivatedRoute,
    private experienciaS: ExperienciaService,
    private router: Router,
    public imageService: ImageService) { }

  ngOnInit(): void {

  }

  onCreate(): void {
    const experiencia = new Experiencia(this.nombreE, this.descripcionE, this.periodoE, this.linkE, this.imgE);
    this.experienciaS.save(experiencia).subscribe(
      data => {
        alert("Experiencia añadida con éxito.");
        this.router.navigate(['']);
      }, err => {
        alert("Error al agregar el Experiencia");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "experiencia_" + id;
    this.imageService.uploadImage($event, name)

  }
}
