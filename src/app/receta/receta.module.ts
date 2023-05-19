import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetaComponent } from './receta.component';
import { RecetaListComponent } from './receta-list/receta-list.component';
import { RecetaDetailComponent } from './receta-detail/receta-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RecetaComponent, RecetaListComponent, RecetaDetailComponent],
  exports: [RecetaComponent, RecetaListComponent, RecetaDetailComponent]
})
export class RecetaModule { }
