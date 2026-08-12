import { Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

@Service()
export class HttpService {

    http = inject(HttpClient);              // Istanza del servizio HttpClient per effettuare chiamate HTTP

    //--RICHESTA GET TUTTI I TODO--
    caricaTuttiTodo() {
        return this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos?_limit=5');        //recupera i dati dall'API ma non li gestisce, li passa a prova-http in modo che possa trasformarli nel formato adatto
    }

    //--RICHIESTA GET TODO DELL'UTENTE CON ID 1--
    caricaTodoUtente1(){
        return this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos?userId=1');       
    }
}
