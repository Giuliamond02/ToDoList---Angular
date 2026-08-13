import { Service } from '@angular/core';
import { signal } from '@angular/core';

@Service()
export class TodoService {

    todos = signal([                //creo un array di oggetti dove per ogni oggetto aggiungo una proprietà che segna la checkbox inizialmente come non selezionata
    { text: "Imparare a usare Angular", done: false, eliminata: false },
    { text: "Creare componenti Angular", done: false, eliminata: false },
    { text: "Utilizzare il routing in Angular", done: false, eliminata: false }
    ]);

    OttieniAttivitaCompletate() {          //funzione per ottenere le attività completate
        return this.todos().filter(todo => todo.done && !todo.eliminata);   //ritorna un nuovo array contenente solo le attività completate (quelle con done impostato a true)
    }

    OttieniAttivitaEliminate() {          //funzione per ottenere le attività eliminate
        return this.todos().filter(todo => todo.eliminata);   //ritorna un nuovo array contenente solo le attività eliminate (quelle con eliminata impostato a true)
    }

    OttieniAttivitaAttive(){
        return this.todos().filter(todo => !todo.done && !todo.eliminata);   //ritorna un nuovo array contenente solo le attività attive (quelle con done impostato a false e eliminata impostato a false)
    }
}
