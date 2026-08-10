import { Component, signal, inject} from '@angular/core';
import { TodoService } from '../../todo-service';
import { SingolaAttivita  } from '../../components/singola-attivita/singola-attivita';

@Component({
  selector: 'app-eliminate',
  imports: [SingolaAttivita],
  templateUrl: './eliminate.html',
  styleUrl: './eliminate.css',
})
export class Eliminate {

  todoService = inject(TodoService);

}
