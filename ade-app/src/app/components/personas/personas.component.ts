import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { Persona } from '../../classes/persona';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {
  personas: Persona[];

  constructor(private personaService: PersonaService) {
    this.personaService.getPersonas()
      .subscribe(personas => {
        this.personas = personas;
      });
  }
  ngOnInit() {

  }

}
