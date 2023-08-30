import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage {

  titulo = 'ShoppingList';
  imagem = 'https://cdn.pixabay.com/photo/2015/09/21/14/24/supermarket-949913_1280.jpg';
  
  minhaLista = [
    {item: 'Feijão', quant: '2kg'},
    {item: 'Leite', quant: '3L'},
    {item: 'Batata', quant: '3kg'}
  ];
  
  constructor() {}
}