import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { RecetaDetail } from './receta-detail';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  private apiUrl: string = 'https://gist.githubusercontent.com/VivianGomez/e65c117a4809355fbb53c37cb8fe1d44/raw/d0482c083962cad2319b3640250da0194d341dc6/recipes';

  constructor(private http: HttpClient) {}

  getRecetas(): Observable<RecetaDetail[]> {
    return this.http
      .get<RecetaDetail[]>(this.apiUrl)
      .pipe(
        catchError((err) => throwError(() => new Error('error en el servicio')))
      );
  }

  getReceta(id: string): Observable<RecetaDetail> {
    return this.http.get<RecetaDetail>(this.apiUrl + '/' + id);
  }

}
