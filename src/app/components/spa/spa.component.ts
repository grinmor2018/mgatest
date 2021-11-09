import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  form: FormGroup = new FormGroup({});


  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: ['',[Validators.required]]
    });
  }

  ngOnInit(){
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

  guardar(){
    console.log(this.form.value.name," guardado!");
    let name = this.form.value.name;

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
  }

}
