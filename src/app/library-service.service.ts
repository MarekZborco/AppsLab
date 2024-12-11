import { Injectable } from '@angular/core';
import { Book } from './library/models/book';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryServiceService {

  books: Book[] = [
    {
      id: 1,
      title: 'Through the Crimson Sky',
      author: 'Eleanor Harper',
      genre: 'Steampunk',
      available: false,
      pages: '415p',
      year: '1990'
    },
    {
      id: 2,
      title: 'The Glass Sanctuary',
      author: 'Victor Kane',
      genre: 'Drama',
      available: true,
      pages: '290p',
       year: '1990'
    },
    {
      id: 3,
      title: 'Chronicles of Dusk',
      author: 'Isabelle Cross',
      genre: 'Epic Fantasy',
      available: false,
      pages: '170p',
       year: '1990'
    },
    {
      id: 4,
      title: 'Binary Fracture',
      author: 'Nathaniel Brooks',
      genre: 'Cyberpunk',
      available: true,
      pages: '305p',
       year: '1990'
    },
    {
      id: 5,
      title: 'A Song for Ashes',
      author: 'Clara Monroe',
      genre: 'Tragedy',
      available: false,
      pages: '245p',
       year: '1990'
    },
    {
      id: 6,
      title: 'Phantom Reverie',
      author: 'Gideon Lowe',
      genre: 'Paranormal',
      available: false,
      pages: '375p',
      year: '1990'
    },
    {
      id: 7,
      title: 'The Iron Accord',
      author: 'Hannah Ellis',
      genre: 'Military Fiction',
      available: true,
      pages: '430p',
      year: '1990'
    },
    {
      id: 8,
      title: 'Tales of the Voidwalker',
      author: 'Julian Raynor',
      genre: 'Space Opera',
      available: false,
      pages: '480p',
      year: '1990'
    },
    {
      id: 9,
      title: 'The Marble Veil',
      author: 'Penelope Lang',
      genre: 'Gothic Fiction',
      available: true,
      pages: '310p',
      year: '1990'
    },
    {
      id: 10,
      title: 'Echoes of Tomorrow',
      author: 'Miles Turner',
      genre: 'Speculative Fiction',
      available: false,
      pages: '360p',
      year: '1990'
      
    }
  ]


  constructor() { }
  getListOfBooks(): Observable<Book[]> {
    return of(this.books).pipe(delay(2000));
  }
}
