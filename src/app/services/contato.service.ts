import { Injectable } from '@angular/core';
import { Contato } from '../models/Contato';

const BASE_DE_CONTATOS:Contato[] = [
  {
    nome: "Mariana Ribeiro",
    email: "mariana@gmail.com",
    telefones:["1111-1111","2222-2222"]
  },
  {
    nome: "Mariana Ribeiro",
    email: "mariana@gmail.com",
    telefones:['2222-2222']
  },
  {
    nome: "Mariana Ribeiro",
    email: "mariana@gmail.com",
    telefones:['3333-1111']
  },
  {
    nome: "Mariana Ribeiro",
    email: "mariana@gmail.com",
    telefones:['4444-4444']
  },
  {
    nome: "Mariana Ribeiro",
    email: "mariana@gmail.com",
    telefones:['5555-5555']
  },
  {
    nome: "Mariana Ribeiro",
    email: "mariana@gmail.com",
    telefones:['6666-6666']
  },
  {
    nome: "Mariana Ribeiro",
    email: "mariana@gmail.com",
    telefones:['7777-7777']
  },
  {
    nome: "Mariana Ribeiro",
    email: "mariana@gmail.com",
    telefones:['8888-8888']
  },
  {
    nome: "Mariana Ribeiro",
    email: "mariana@gmail.com",
    telefones:['9999-1111']
  },
  {
    nome: "Mariana Ribeiro",
    email: "mariana@gmail.com",
    telefones:['1111-1000']
  }]

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor() { }

  getContatos():Contato[]{
    return BASE_DE_CONTATOS;
  }

  addContato(novoContato:Contato):void{
    BASE_DE_CONTATOS.push(novoContato);
  }
}
