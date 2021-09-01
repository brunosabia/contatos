import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contato } from 'src/app/models/Contato';

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
    telefones:["9999","3333","1234"]
  }

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

}
