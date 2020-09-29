import { Injectable } from '@angular/core';
import { Hero } from './hero';
// import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes')
    return this.http.get<Hero[]>(this.heroesUrl)
  }
  getHero(id: Number): Observable<Hero[]> {
    this.messageService.add(`HeroService : fetched hero id=${id}`);
    // return of(HEROES.find(item => item.id === id))
  }
  constructor(private messageService: MessageService, private http: HttpClient, ) { }

  private heroesUrl = 'api/heroes';

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
