import { Component, OnInit } from '@angular/core';
import { Produtos } from '../model/produto.mdodel';
import { DatabaseService } from '../servico/database.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage implements OnInit{
  titulo = 'ShoppingList';
  imagem = 'https://cdn.pixabay.com/photo/2015/09/21/14/24/supermarket-949913_1280.jpg';
  
  minhaLista:Produtos[] = [];
  
  constructor(
    private bancoDados: DatabaseService,
    private loadinControl: LoadingController
    ){}

  ngOnInit():void{
    this.carregando();
    this.bancoDados.consulta().subscribe(caixa => this.minhaLista = caixa);
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