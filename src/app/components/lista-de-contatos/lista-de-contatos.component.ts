import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-lista-de-contatos',
  templateUrl: './lista-de-contatos.component.html',
  styleUrls: ['./lista-de-contatos.component.css']
})
export class ListaDeContatosComponent implements OnInit {

  public contatos: Contato[];
  private cs:ContatoService = new ContatoService();

  constructor() {
    this.contatos = this.cs.getContatos();
    ContatoService.onContatosMudaram.subscribe(
      (contatos) => {
        //pega a lista de contatos local e atualiza com a lista de contatos do localStorage
        this.contatos = contatos;
      }
    )
  }

  ngOnInit(): void {
  }  

}
