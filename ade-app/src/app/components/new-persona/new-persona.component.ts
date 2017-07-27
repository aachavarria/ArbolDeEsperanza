import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { Persona } from '../../classes/persona';

@Component({
  selector: 'app-new-persona',
  templateUrl: './new-persona.component.html',
  styleUrls: ['./new-persona.component.scss']
})
export class NewPersonaComponent implements OnInit {

  @Output() cancel:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() persona:Persona;
  isNewPersona:Boolean = false;

  constructor(private personaService: PersonaService) {
  }

  ngOnInit() {
    console.log(this.persona)
    if(this.persona.name == ""){
      this.isNewPersona = true;
    }
  }

  onSubmit() {
    if(this.isNewPersona) {
      this.personaService.addPersona(this.persona)
        .subscribe(persona => {
          this.cancel.emit(true);
        })
    }else {
      this.personaService.updatePersona(this.persona)
        .subscribe(persona => {
          this.cancel.emit(true);
        })
    }
  }

  onCancel() {
    this.cancel.emit(false);
  }

}
