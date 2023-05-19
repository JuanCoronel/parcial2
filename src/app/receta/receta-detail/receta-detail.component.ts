import { Component, Input, OnInit } from '@angular/core';
import { RecetaDetail } from '../receta-detail';
import { ActivatedRoute } from '@angular/router';
import { RecetaService } from '../receta.service';

@Component({
  selector: 'app-receta-detail',
  templateUrl: './receta-detail.component.html',
  styleUrls: ['./receta-detail.component.css']
})
export class RecetaDetailComponent implements OnInit {


  recetaId!: string;
  @Input() recetaDetail!: RecetaDetail;

  constructor(
    private route: ActivatedRoute,
    private recetaService: RecetaService) { }

  getBook(){
    this.recetaService.getReceta(this.recetaId).subscribe(book=>{
      this.recetaDetail = book;
    })
  }

  ngOnInit() {
  }

}
