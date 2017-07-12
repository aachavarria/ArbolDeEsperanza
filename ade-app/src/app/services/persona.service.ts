import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PersonaService {

  constructor(private http:Http) {
    console.log('Persona Server Init...');
  }

  getPersonas(){
    return this.http.get("api/personas")
      .map(res => res.json());
  }

}
