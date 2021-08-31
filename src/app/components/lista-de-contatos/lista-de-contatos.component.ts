import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-lista-de-contatos',
  templateUrl: './lista-de-contatos.component.html',
  styleUrls: ['./lista-de-contatos.component.css']
})
export class ListaDeContatosComponent implements OnInit {

  private _contatos: Contato[];
  private cs:ContatoService = new ContatoService();
  
  constructor() { 
    this._contatos = this.cs.getContatos();
  }

  ngOnInit(): void {
  }

  /*public get contatos(): Contato[]{
    return this._contatos;
  }*/

}
