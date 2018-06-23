import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Hero} from './hero'
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'
import {MessageService} from './message.service'
import {catchError, map, tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private log(message: string){
    this.messageService.add('HeroService: '+message)
  }

  private heroesUrl = 'api/heroes'
  
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes')
    this.messageService.add('HeroService: gotcha')

    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe( 
        tap(heroes => this.log('fetched heroes')),
        catchError(this.handleError('getHeroes', []))
      )
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`fetch hero ${id}`)
    const url = `${this.heroesUrl}/${id}`
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetch hero ${id}`)),
      catchError(this.handleError<Hero>(`getHero ${id}`))
    )
  }

  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error)
      this.log(`${operation} failed: ${error.message}`)

      return of(result as T)
    }
  }

}







