import { Component, signal, inject } from '@angular/core';
import { SingolaAttivita  } from '../../components/singola-attivita/singola-attivita';
import { FormsModule } from "@angular/forms";
import { TodoService } from '../../todo-service';

@Component({
  selector: 'app-home',
  imports: [ FormsModule, SingolaAttivita],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  title = signal('Le mie attività');
  buttonText = signal('Aggiungi attività');
  buttonDisabled = signal(false);
  newTodo = signal('');                 // Segnale per memorizzare il testo dell'attività inserita dall'utente
  todoService = inject(TodoService);   // Istanza del servizio TodoService che mi serve per inietttare l'array che è contenuto nel servizio in modo da usarlo in questo componente

  AggiungiAttivita() {                              //funzione per aggiungere un'attività alla lista
    const testoPulito = this.newTodo().trim();      //ripulisce il testo inserito dall'utente rimuovendo eventuali spazi bianchi all'inizio e alla fine della stringa
    if (!testoPulito) {
      return;                                       // Se il testo è vuoto o contiene solo spazi bianchi, non aggiungere l'attività
    }
    else {
      this.todoService.todos.push({ text: testoPulito, done: false });    // Aggiunge l'attività alla lista
      this.newTodo.set('');                        // Svuota il campo di input dopo aver aggiunto l'attività
    }
  }

  rimuoviAttivita(todo  :any){                           //funzione per rimuovere un'attività dalla lista
  const index = this.todoService.todos.indexOf(todo);    //trova l'indice dell'attività da rimuovere nell'array todos
  if (index !== -1) {                                     //controlla se l'attività è stata trovata nell'array
    this.todoService.todos.splice(index, 1);              //rimuove l'attività dall'array todos utilizzando l'indice trovato
  }
  }

}
