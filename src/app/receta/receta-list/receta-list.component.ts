import { Component, OnInit } from '@angular/core';
import { RecetaDetail } from '../receta-detail';
import { RecetaService } from '../receta.service';

@Component({
  selector: 'app-receta-list',
  templateUrl: './receta-list.component.html',
  styleUrls: ['./receta-list.component.css']
})
export class RecetaListComponent implements OnInit {
  recetas: Array<RecetaDetail> = [];
  selected: Boolean = false;
  promedio: number = 0;
  opiniones: number = 0;
  selectedReceta!: RecetaDetail;

  constructor(private recetaService: RecetaService) { }
  getRecetas(): void {
    this.recetaService.getRecetas().subscribe({next: recetas => this.recetas = recetas , error: e => console.error(e)});
    console.log(this.recetas)
    this.getPromedioEstrellas();
  }

  onSelected(receta: RecetaDetail): void {
    this.selected = true;
    this.selectedReceta = receta;
  }
  ngOnInit() {
    this.getRecetas();

  }

  getPromedioEstrellas(){

    let sum: number = 1;
    let avg: number = 1;
    for (let receta in this.recetas)
    {
      receta;
      avg++;
    }
    this.promedio = sum/avg;

  }

  getTotalOpiniones(){
    let sum: number = 0;
    for (let receta in this.recetas)
    {

    }
    this.opiniones = sum;

  }




}
