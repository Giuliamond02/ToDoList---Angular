import { Service } from '@angular/core';

@Service()
export class TodoService {

    todos = [                //creo un array di oggetti dove per ogni oggetto aggiungo una proprietà che segna la checkbox inizialmente come non selezionata
    { text: "Imparare a usare Angular", done: false },
    { text: "Creare componenti Angular", done: false },
    { text: "Utilizzare il routing in Angular", done: false }
    ];

    OttieniAttivitaCompletate() {          //funzione per ottenere le attività completate
        return this.todos.filter(todo => todo.done);   //ritorna un nuovo array contenente solo le attività completate (quelle con done impostato a true)
    }
}
