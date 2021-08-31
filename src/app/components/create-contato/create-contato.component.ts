import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {

  @Output() closeModalClick:EventEmitter<null> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  closeModal(){
    this.closeModalClick.emit();
    console.log("Fechar Modal!")
  }

}
