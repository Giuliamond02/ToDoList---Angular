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

  rimuoviAttivita(index:number){                   //funzione per rimuovere un'attività dalla lista
  this.todoService.todos.splice(index,1);          //con index passo l'indice del singolo elemnto dell'array da eliminare, con 1 indico che voglio eliminare un solo elemento
}

}
