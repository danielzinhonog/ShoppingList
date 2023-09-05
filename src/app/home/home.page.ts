import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { FirebaseService } from '../servico/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage implements OnInit{
  titulo = 'ShoppingList';
  imagem = 'https://cdn.pixabay.com/photo/2015/09/21/14/24/supermarket-949913_1280.jpg';
  
  minhaLista:any[] = [];
  
  constructor(
    private bancoDados:FirebaseService,
    private loadinControl:LoadingController
    ){}

  ngOnInit():void{
    this.carregando();
    this.bancoDados.consulta().subscribe(results => this.minhaLista = results);
  }

  excluir(id:number){
    this.bancoDados.excluir(id);
    setTimeout(this.refresh, 1000);
  }

  refresh(){
    location.reload();
  }

  async carregando(){
    const load = this.loadinControl.create({
      mode: 'ios',
      message: 'Aguarde...',
      duration: 1000
    });
    (await load).present();
  }
}