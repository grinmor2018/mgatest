import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Persona } from './../../models/Persona';
import { SpaService } from './../../services/spa.service';

@Component({
  selector: 'app-spa',
  templateUrl: './spa.component.html',
  styleUrls: ['./spa.component.scss']
})
export class SpaComponent implements OnInit {

  imagenes:boolean= false;
  video:boolean= false;
  links:boolean= false;
  popup:boolean= false;
  formularios:boolean= false;
  api:boolean = false;
  edit:boolean = false;
  form: FormGroup = new FormGroup({});
  listaPersonas: Persona[]=[];
  id:string | null;
  nombre: string="";
  apellidos: string="";
  edad: number = 0;

  constructor(
    private modalService: NgbModal,
    private spaService: SpaService,
    private aRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      nombre: ['',[Validators.required]],
      apellidos: ['',[Validators.required]],
      edad: ['',[Validators.required]]
    });
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(){
    this.verPersonas();
  }

  actualizar(){
    let persona= {
      nombre:this.nombre,
      apellidos: this.apellidos,
      edad:this.edad
    }
    if(this.id!==null){
      this.spaService.editarPersona(this.id,persona)
    }
  }

  abrir(elemento:string){
    this.resetGrid();
    switch (elemento){
      case "imagenes": {
        this.imagenes= true;
        break
      }
      case "video": {
        this.video= true;
        break
      };
      case "links": {
        this.links= true;
        break
      };
      case "popup": {
        this.popup= true;
        break
      };
      case "formularios": {
        this.formularios= true;
        break
      };
      case "api": {
        this.api= true;
        break
      };
    }
  };

  borrar(persona: any){
    this.spaService.borrarPersona(persona.id);
  }

  editar(persona: any){
    this.nombre = persona.nombre;
    this.apellidos = persona.apellidos;
    this.edad= persona.edad;
    this.id = persona.id;
    this.edit = true;
  }

  guardar(){
    console.log(this.form.value.nombre," guardado!");
    let nombre = this.form.value.nombre;
    let apellidos = this.form.value.apellidos;
    let edad = this.form.value.edad;
    let persona: Persona = {
      nombre:nombre,
      apellidos: apellidos,
      edad:edad
    }
    if(this.edit){
      this.actualizar();
    } else {
      this.spaService.crearPersona(persona);
    }
    this.verPersonas();
    this.edit= false;
  }

  openModal(contingut: any){
		this.modalService.open(contingut, { centered: true });
	}

  resetGrid(){
    this.imagenes= false;
    this.video= false;
    this.links= false;
    this.popup= false;
    this.formularios= false;
    this.api= false;
    this.edit= false;
    this.resetLista();
  }

  resetLista(){
    this.nombre="";
    this.apellidos= "";
    this.edad=0;
    this.edit= false;
  }

  verPersonas(){
    this.spaService.getPersonas().subscribe(persona => {
      this.listaPersonas = [];
      persona.forEach((element:any) => {
        this.listaPersonas.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    }
    );
  }

}
