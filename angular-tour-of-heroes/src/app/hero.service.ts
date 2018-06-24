import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Hero} from './hero'
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'
import {MessageService} from './message.service'
import {catchError, map, tap} from 'rxjs/operators'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes'
  
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private log(message: string){
    this.messageService.add('HeroService: '+message)
  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes')
    this.messageService.add('HeroService: gotcha')

    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe( 
        // tab: side effect
        tap(heroes => this.log(`fetched ${heroes}`)),
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

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap((hero: Hero) => this.log(`add hero ${hero.id}`)),
      catchError(this.handleError<any>('addHero'))
    )
  }

  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id
    const url = `${this.heroesUrl}/${id}`

    return this.http.delete<Hero>(url, httpOptions).pipe (
      tap( (hero: Hero) => this.log(`delete hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero') )
    )
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`update hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    )
  }

  searchHeroes(term: string): Observable<Hero[]>{
    if(!term.trim()){
      return of([])
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log('found')),
      catchError(this.handleError<Hero[]>('searchHero', []) )
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







