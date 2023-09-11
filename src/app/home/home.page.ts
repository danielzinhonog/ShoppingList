import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { FirebaseService } from '../servico/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit{
  titulo = 'ShoppingList';
  imagem = 'https://cdn.pixabay.com/photo/2016/03/26/16/44/tomatoes-1280859_640.jpg';
  
  minhaLista:any[] = [];

  constructor(
    private firebaseService: FirebaseService,
    private loadinControl: LoadingController,
    private toast: ToastController
    ){};

  ngOnInit(): void {
    this.carregando();
    this.firebaseService.consulta().subscribe(results => this.minhaLista = results);
  };

  async carregando(){
    const load = this.loadinControl.create({
      mode: 'ios',
      message: 'Aguarde...',
      duration: 2000
    });
    (await load).present();
  };

  async mensagem(){
    const msg = this.toast.create({
      mode: 'ios',
      message: 'Item exluído com sucesso!',
      color: 'success',
      position: 'bottom',
      duration: 2000
    });
    (await msg).present();
  };

  apaguei(id: any){
    this.firebaseService.excluir(id);
    this.mensagem();
    setTimeout(this.refresh,2000);
  };

  refresh(){
    location.reload();
  };
}