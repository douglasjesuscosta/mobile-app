import { Injectable, Signal } from "@angular/core";
import { delay, Observable, of, tap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class InicioService {

  getCardsMenu(): Observable<any> {
    return of([
      {
      titulo: "Módulo de cursos",
      descricao: "Módulo de cursos cadastrados",
      icone: ""
      },
      {
      titulo: "Módulo de cursos",
      descricao: "Módulo de cursos cadastrados",
      icone: ""
      },
      {
      titulo: "Módulo de cursos",
      descricao: "Módulo de cursos cadastrados",
      icone: ""
      },
      {
      titulo: "Módulo de cursos",
      descricao: "Módulo de cursos cadastrados",
      icone: ""
      },
      {
      titulo: "Módulo de cursos",
      descricao: "Módulo de cursos cadastrados",
      icone: ""
      }]
  ).pipe(
      tap( () => delay(2000) )
    );
  }

}
