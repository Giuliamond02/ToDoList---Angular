import { Component, signal, inject } from '@angular/core';
import { SingolaAttivita  } from '../../components/singola-attivita/singola-attivita';
import { FormsModule } from "@angular/forms";
import { TodoService } from '../../todo-service';
import { HttpService } from '../../http-service';

@Component({
  selector: 'app-prova-http',
  imports: [ FormsModule, SingolaAttivita],
  templateUrl: './prova-http.html',
  styleUrl: './prova-http.css',
})
export class ProvaHttp {

  title = signal('Le mie attività');
  buttonText = signal('Aggiungi attività');
  buttonDisabled = signal(false);
  newTodo = signal('');                    // Segnale per memorizzare il testo dell'attività inserita dall'utente
  todoService = inject(TodoService);       // Istanza del servizio TodoService che mi serve per inietttare l'array che è contenuto nel servizio in modo da usarlo in questo componente
  httpService = inject(HttpService);       // Istanza del servizio HttpService per effettuare chiamate HTTP

  //--RICHESTA GET--
  caricaTodo() {
    this.httpService.caricaTodo().subscribe(risultato => {        // Dice ad HttpService di far partire la chiamata API
      this.todoService.todos = risultato.map(todo => ({           // modifica il formato dei dati ottenuti dall'API nel formato adatto alla mia app e poi li mette nel TodoService, che ha il compito di mostrarli tramite prova-http.html
        text: todo.title,
        done: todo.completed,
        eliminata: false
      }));
    });
  }

  AggiungiAttivita() {                              //funzione per aggiungere un'attività alla lista
    const testoPulito = this.newTodo().trim();      //ripulisce il testo inserito dall'utente rimuovendo eventuali spazi bianchi all'inizio e alla fine della stringa
    if (!testoPulito) {
      return;                                       // Se il testo è vuoto o contiene solo spazi bianchi, non aggiungere l'attività
    }
    else {
      this.todoService.todos.push({ text: testoPulito, done: false, eliminata: false });    // Aggiunge l'attività alla lista
      this.newTodo.set('');                        // Svuota il campo di input dopo aver aggiunto l'attività
    }
  }

  rimuoviAttivita(todo  :any){                           //funzione per rimuovere un'attività dalla lista
  const index = this.todoService.todos.indexOf(todo);    //trova l'indice dell'attività da rimuovere nell'array todos
  if (index !== -1) {                                    //controlla se l'attività è stata trovata nell'array
    this.todoService.todos[index].eliminata = true;      //imposta la proprietà eliminata su true
  }
  }

}
