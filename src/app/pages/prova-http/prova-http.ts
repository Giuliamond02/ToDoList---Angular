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

  //--RICHESTA GET TUTTI I TODO--
  caricaTuttiTodo() {
    this.httpService.caricaTuttiTodo().subscribe(risultato => {        // Dice ad HttpService di far partire la chiamata API
      this.todoService.todos.set(risultato.map(todo => ({               // modifica il formato dei dati ottenuti dall'API nel formato adatto alla mia app e poi li mette nel TodoService, che ha il compito di mostrarli tramite prova-http.html
        text: todo.title,
        done: todo.completed,
        eliminata: false
      })));
    });
  }

  //--RICHIESTA GET TODO DELL'UTENTE CON ID 1--
  caricaTodoUtente1() {
    this.httpService.caricaTodoUtente1().subscribe(risultato => {        // Dice ad HttpService di far partire la chiamata API
      this.todoService.todos.set(risultato.map(todo => ({                 // modifica il formato dei dati ottenuti dall'API nel formato adatto alla mia app e poi li mette nel TodoService, che ha il compito di mostrarli tramite prova-http.html
        text: todo.title,
        done: todo.completed,
        eliminata: false
      })));
    });
  }

  //--METODO POST PER AGGIUNGERE UN NUOVO TODO--
  AggiungiToDo() {                              //funzione per aggiungere un'attività alla lista
    const testoPulito = this.newTodo().trim();      //ripulisce il testo inserito dall'utente rimuovendo eventuali spazi bianchi all'inizio e alla fine della stringa
    if (!testoPulito) {
      return;                                       // Se il testo è vuoto o contiene solo spazi bianchi, non aggiungere l'attività
    }
    else {
      const nuovoToDo = { title: testoPulito , completed: false, userId: 1, id:1};      //crea un nuovo todo e setta i parametri come richiesti dall'api
      this.httpService.aggiungiToDo(nuovoToDo).subscribe(risultato => {                // Dice ad HttpService di far partire la chiamata API
        this.todoService.todos.update( todos => [...todos , {                         // modifica il formato dei dati ottenuti dall'API nel formato adatto alla mia app e poi li mette nel TodoService, che ha il compito di mostrarli tramite prova-http.html
          text: risultato.title,
          done: risultato.completed,
          eliminata: false
        }])
        this.newTodo.set('')
      });
    }
  }

  rimuoviAttivita(todo: any) {                             //funzione per eliminare un'attività dalla lista
    this.todoService.todos.update(todos => {               
      const index = todos.indexOf(todo);                   //trova l'indice dell'attività
      if (index !== -1) {                                  //controlla se l'attività è stata trovata nell'array
        todos[index].eliminata = true;                     //imposta la proprietà eliminata su true
      }
      return todos;
  });
}

}
