import { Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

@Service()
export class HttpService {

    http = inject(HttpClient);              // Istanza del servizio HttpClient per effettuare chiamate HTTP

    //--RICHESTA GET--
    caricaTodo() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos?_limit=5');        //recupera i dati dall'API ma non li gestisce, li passa a prova-http in modo che possa trasformarli nel formato adatto
    }

}
