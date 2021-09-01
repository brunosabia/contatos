import { FunctionCall } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contatos';
  mostrandoModal = true;

  mostrarModal(){
    console.log("Eu te escutei, meu filho!");
    this.mostrandoModal = true;
  }

  esconderModal(){
    console.log("Fechando Modal!");
    this.mostrandoModal = false;
  }
}

