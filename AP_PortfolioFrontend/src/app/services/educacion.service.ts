import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})

export class EducacionService {
  url= 'http://localhost:8080/educacion/'

  constructor(private httpClient:HttpClient){}

  public lista(): Observable<Educacion[]> { 
    return this.httpClient.get<Educacion[]>(this.url + 'lista');
  }

  public getById(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.url+ `buscar/${id}` );
  }

  public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.url+ 'crear', educacion);
  }

  public update(educacion: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.url+ 'editar', educacion);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url+ `borrar/${id}`);
  }

}