import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from './../models/Persona';


@Injectable({
  providedIn: 'root'
})
export class SpaService {

  personaList!: Observable<any[]>;
  persona: Persona = new Persona();

  constructor(private firestore: AngularFirestore) { }

  getPersonas():Observable<any>{
    return this.personaList = this.firestore.collection('personas').snapshotChanges();
  }

  getPersona(id: string): Observable<any> {
    return this.firestore.collection('personas').snapshotChanges();
  }

  crearPersona(persona: Persona){
    return this.firestore.collection('personas').add(persona);
  }

  editarPersona(id: string, persona: any){
    return this.firestore.collection('personas').doc(id).update(persona);
  }

  borrarPersona(id: string){
    return this.firestore.collection('personas').doc(id).delete();
  }

}
