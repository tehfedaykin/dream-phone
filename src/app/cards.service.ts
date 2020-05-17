import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CrushCard, cards } from '../data/cards';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor() { }

  getCards(): Observable<CrushCard[]> {
    return of(cards);
  }
}
