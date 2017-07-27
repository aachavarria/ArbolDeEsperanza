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

  addPersona(persona){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post("/api/persona",JSON.stringify(persona), {headers: headers})
      .map(res => res.json());
  }

  updatePersona(persona){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put("/api/persona/"+persona._id,JSON.stringify(persona), {headers: headers})
      .map(res => res.json());
  }

}
