import { EventEmitter, Injectable } from '@angular/core';
import { Contato } from '../models/Contato';

const BASE_DE_CONTATOS:Contato[] = [
  {
    nome: "Mariana Ribeiro 1",
    email: "mariana@teste.com",
    telefones: ['1111 - 1111','1111 - 1111','1111 - 1111']
  },
  {
    nome: "Mariana Ribeiro 2",
    email: "mariana@teste.com",
    telefones: ['2222 - 2222']
  },
  {
    nome: "Mariana Ribeiro 3",
    email: "mariana@teste.com",
    telefones: ['3333 - 3333']
  },
  {
    nome: "Mariana Ribeiro 4",
    email: "mariana@teste.com",
    telefones: ['4444 - 4444']
  },
  {
    nome: "Mariana Ribeiro 5",
    email: "mariana@teste.com",
    telefones: ['5555 - 5555']
  },
  {
    nome: "Mariana Ribeiro 6",
    email: "mariana@teste.com",
    telefones: ['6666 - 6666']
  },
  {
    nome: "Mariana Ribeiro 9",
    email: "mariana@teste.com",
    telefones: ['9999 - 9999']
  },
  {
    nome: "Mariana Ribeiro 7",
    email: "mariana@teste.com",
    telefones: ['7777 - 7777']
  },
  {
    nome: "Mariana Ribeiro 8",
    email: "mariana@teste.com",
    telefones: ['8888 - 8888']
  },
]

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private readonly chave:string = "CONTATOS";

  static onContatosMudaram:EventEmitter<Contato[]> = new EventEmitter();

  constructor() { }

  getContatos():Contato[] {
      //localstorage SÓ GUARDA STRINGS
    //tentar carregar os dados da localStorage
    let dados = window.localStorage.getItem(this.chave);
    //verificar se havia dados na localStorage
    if(dados){
      // Se houver dados => transformar em array e retornar os contatos
      let contatosCarregados:Contato[] = JSON.parse(dados);
      return contatosCarregados;

    }else{
      //se não houver dados => guarda essa array vazia no localStorage e retorna array vazia)
      window.localStorage.setItem(this.chave,"[]")
      return [];
    }
  }

  addContato(c:Contato): void {
    //trazer do localstorage em um array
    let contatos = this.getContatos();
    //adicionar o contato c ao final do array
    contatos.push(c);
    //salvar o array de volta no localStorage
    window.localStorage.setItem(this.chave,JSON.stringify(contatos));

    //EMITINDO evento que "onContatosMudaram"
    ContatoService.onContatosMudaram.emit(contatos);
  }

}
