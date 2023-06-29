import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})

export class ExperienciaService {
  url= 'http://localhost:8080/experiencia/'

  constructor(private httpClient:HttpClient){}

  public list(): Observable<Experiencia[]> { 
    return this.httpClient.get<Experiencia[]>(this.url + 'lista');
  }

  public getById(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.url+ `buscar/${id}` );
  }

  public save(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.url+ 'crear', experiencia);
  }

  public update(persona: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.url+ 'editar', persona);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url+ `borrar/${id}`);
  }

}

