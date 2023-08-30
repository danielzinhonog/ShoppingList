import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})

export class FormularioPage implements OnInit {

  titulo= 'Cadastro';
  imagem = 'https://cdn.pixabay.com/photo/2015/09/21/14/24/supermarket-949913_1280.jpg';
  nameButton = 'Cadastrar';

  form!:FormGroup
  
  constructor(private formBuilder:FormBuilder) {}

  ngOnInit() {
    this.validaForm();
  }

  validaForm(){
    this.form = this.formBuilder.group({
      item: ['',[Validators.required, Validators.minLength(3)]],
      quant: ['',[Validators.required, Validators.maxLength(10)]]
    })
  }
}