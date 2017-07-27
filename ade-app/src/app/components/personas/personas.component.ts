import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { Persona } from '../../classes/persona';
import { FilterPipe } from '../../pipes/FilterPipe'

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {
  personas: Persona[];
  selectedPersona:Persona;
  form: boolean = false;

  constructor(private personaService: PersonaService) {
    this.personaService.getPersonas()
      .subscribe(personas => {
        this.personas = personas;
      });
  }
  ngOnInit() {

  }

  onEdit(persona:Persona) {
    this.form = !this.form;
    this.selectedPersona = persona;
  }

  onCancel(newPersona:boolean){
    this.selectedPersona = null;
    this.form = false;
    if(newPersona) {
      this.personaService.getPersonas()
        .subscribe(personas => {
          this.personas = personas;
        });
    }
  }

  showForm() {
    this.selectedPersona = new Persona('','','');
    this.form = !this.form;
  }

}
