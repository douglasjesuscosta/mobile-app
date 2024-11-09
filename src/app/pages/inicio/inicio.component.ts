import { Component, inject } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { InicioService } from './inicio.service';
import { Observable } from 'rxjs';
import { MatChipsModule } from '@angular/material/chips';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatChipsModule, NgIf, CommonModule, CardComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

  private readonly inicioService = inject(InicioService);
  public inicioData$ : Observable<any>;

  constructor() {
    this.inicioData$ = this.inicioService.getCardsMenu();

  }

}
