import { Injectable } from '@angular/core';
import { Contato } from '../models/Contato';

const BASE_DE_CONTATOS:Contato[] = []
  // {
  //   nome: "Mariana Ribeiro",
  //   email: "mariana@gmail.com",
  //   telefones:["1111-1111","2222-2222"]
  // },
  // {
  //   nome: "Mariana Ribeiro",
  //   email: "mariana@gmail.com",
  //   telefones:['2222-2222']
  // },
  // {
  //   nome: "Mariana Ribeiro",
  //   email: "mariana@gmail.com",
  //   telefones:['3333-1111']
  // },
  // {
  //   nome: "Mariana Ribeiro",
  //   email: "mariana@gmail.com",
  //   telefones:['4444-4444']
  // },
  // {
  //   nome: "Mariana Ribeiro",
  //   email: "mariana@gmail.com",
  //   telefones:['5555-5555']
  // },
  // {
  //   nome: "Mariana Ribeiro",
  //   email: "mariana@gmail.com",
  //   telefones:['6666-6666']
  // },
  // {
  //   nome: "Mariana Ribeiro",
  //   email: "mariana@gmail.com",
  //   telefones:['7777-7777']
  // },
  // {
  //   nome: "Mariana Ribeiro",
  //   email: "mariana@gmail.com",
  //   telefones:['8888-8888']
  // },
  // {
  //   nome: "Mariana Ribeiro",
  //   email: "mariana@gmail.com",
  //   telefones:['9999-1111']
  // },
  // {
  //   nome: "Mariana Ribeiro",
  //   email: "mariana@gmail.com",
  //   telefones:['1111-1000']
  // }]

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private baseDeContatos:Contato[];
  private chave:string = "CONTATOS";

  constructor() {

    //carregando informações do localStorage na chave Contatos
    let dados = window.localStorage.getItem(this.chave);

    //verificando se as informações existem
    if(dados){
      //eiste , transformando em array e guardando em baseDeContatos
      this.baseDeContatos = JSON.parse(dados);
    }else{
      //não existe

      //poe uma string json com o array vazio no local storage
      window.localStorage.setItem(this.chave,"[]")

      //pondo um array vazio no atributo baseDeContatos
      this.baseDeContatos = [];
    }
   }

  getContatos():Contato[]{
    return BASE_DE_CONTATOS;
  }

  addContato(novoContato:Contato):void{
    BASE_DE_CONTATOS.push(novoContato);
    window.localStorage.setItem(this.chave,JSON.stringify(this.baseDeContatos));
  }
}
