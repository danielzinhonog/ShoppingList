import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { FirebaseService } from '../servico/firebase.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})

export class UpdatePage implements OnInit{
  imagem = 'https://cdn.pixabay.com/photo/2016/03/26/16/44/tomatoes-1280859_640.jpg';
  nameButton = 'Atualizar';

  form!:FormGroup;

  routerId = null; 

  constructor(
    private formBuilder:FormBuilder,

    private firebaseService: FirebaseService,
    
    private activateRouter: ActivatedRoute,

    private router: Router
  ) { }

  ngOnInit() {

    this.validaForm('');

    this.routerId = this.activateRouter.snapshot.params['id'];

    if(this.routerId){
      this.firebaseService.consultaUm(this.routerId).subscribe(caixinha => this.validaForm(caixinha));
    }
  }

  validaForm(dados: any){
    this.form = this.formBuilder.group({
      item: [dados.item,[Validators.required, Validators.minLength(3)]],
      quant: [dados.quant,[Validators.required, Validators.maxLength(10)]]
    });
  }

  updateButton(){
    this.firebaseService.editar(this.form.value,this.routerId);

    this.router.navigate(['/']);
  }
}