import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../servico/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})

export class FormularioPage implements OnInit{
  titulo = "Cadastro";
  imagem = 'https://cdn.pixabay.com/photo/2016/03/26/16/44/tomatoes-1280859_640.jpg';
  nameButton = 'Cadastrar';

  form!:FormGroup;

  constructor(
    private formBuilder:FormBuilder,

    private firebaseService: FirebaseService,  
    
    private router: Router
    ){}

  ngOnInit(){
    this.validaForm();
  }

  validaForm(){
    this.form = this.formBuilder.group({
      item: ['',[Validators.required, Validators.minLength(3)]],
      quant: ['',[Validators.required, Validators.maxLength(10)]]
    })
  }

  cadastroButton(){
    this.firebaseService.cadastro(this.form.value);

    this.router.navigate(['/']);
  }
}