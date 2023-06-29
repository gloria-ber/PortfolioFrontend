import { Component } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent {
  personas: Persona []= [];//llamo al array de personaService

  constructor(private personaService: PersonaService){}

  ngOnInit(): void {
    this.cargarPersona();
  }

  cargarPersona(): void {
    this.personaService.list().subscribe(data => {this.personas=data});
  }
}


