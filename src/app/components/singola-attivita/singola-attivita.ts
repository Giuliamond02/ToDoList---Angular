import { Component, Input, Output, EventEmitter , signal } from '@angular/core';

@Component({
  selector: 'app-singola-attivita',
  imports: [],
  templateUrl: './singola-attivita.html',
  styleUrl: './singola-attivita.css',
})
export class SingolaAttivita {

  @Input() todo: any = {};     // Input per ricevere l'oggetto todo dal componente genitore

  @Input() index!: number;     // Input per ricevere l'indice dell'attività dal componente genitore

  @Output() elimina = new EventEmitter<number>();       // Output per emettere un evento al componente genitore (home) quando si desidera eliminare l'attività,
                                                        // lo faccio perchè il figlio non si deve occupare di rimuovere l'attività, deve solo comunicare al genitore che vuole rimuoverla
                                                        // con number passo l'indice dell'attività da eliminare, che il genitore userà per rimuovere l'attività dall'array todos

  toggleCheckbox(){                    //funzione per cambiare lo stato della checkbox da selezionata a non selezionata e viceversa
    this.todo.done = !this.todo.done;  // Inverte lo stato della checkbox
  }

  rimuoviAttivita() {                  //funzione per emettere l'evento al componente genitore (home) quando si desidera eliminare l'attività
    this.elimina.emit(this.index);     // Emmette l'evento con l'indice dell'attività da eliminare
  }

}
