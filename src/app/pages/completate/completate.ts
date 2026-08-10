import { Component , signal, inject} from '@angular/core';
import { TodoService } from '../../todo-service';
import { SingolaAttivita  } from '../../components/singola-attivita/singola-attivita';

@Component({
  selector: 'app-completate',
  imports: [SingolaAttivita],
  templateUrl: './completate.html',
  styleUrl: './completate.css',
})
export class Completate {
  todoService = inject(TodoService);

  rimuoviAttivita(todo  :any){                           //funzione per rimuovere un'attività dalla lista
  const index = this.todoService.todos.indexOf(todo);    //trova l'indice dell'attività da rimuovere nell'array todos
  if (index !== -1) {                                    //controlla se l'attività è stata trovata nell'array
    this.todoService.todos[index].eliminata = true;      //imposta la proprietà eliminata su true
  }
  }
}

