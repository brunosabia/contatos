import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //criando o evento que irá mandar pro appComp o click do addContato para iniciar o evento do Modal
  @Output() onAddContatoClick:EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  mostrarModalClick(){
    this.onAddContatoClick.emit();
    console.log('Cliquei para abrir o modal!');
  }

  sair(){
    console.log("pedindo pra sair!");
    this.onAddContatoClick.emit();
  }

}
