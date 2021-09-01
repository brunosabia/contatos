import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contato } from 'src/app/models/Contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {

  @Output() closeModalClick:EventEmitter<null> = new EventEmitter();
  newContato:Contato = {
    nome:"",
    email:"",
    telefones:["9999"]
  }

  cs:ContatoService = new ContatoService();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(){
    this.closeModalClick.emit();
    console.log("Fechar Modal!")
  }

  track(index:number, value:string):any{
    return index;
  }

  addTelefone():void{
    console.log("teste!");
    this.newContato.telefones.push("");
  }

  salvar(){
    this.cs.addContato(this.newContato);
    this.newContato={nome:"",
    email:"",
    telefones:[""]}
    //pra fazer o modal sumir pos salvar
    //this.closeModalClick.emit();
  }

  removeTelefone(i:number):void{
    console.log("remover telefone!");
    this.newContato.telefones.splice(i,1);
  }

 
}
