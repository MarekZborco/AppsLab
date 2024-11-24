import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookComponent } from '../book/book.component';
import { Book } from './models/book';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [CommonModule, BookComponent],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})

export class LibraryComponent {

  books: Book[] = [
    {
      id: 1,
      title: 'Through the Crimson Sky',
      author: 'Eleanor Harper',
      genre: 'Steampunk',
      available: false,
      pages: '415p'
    },
    {
      id: 2,
      title: 'The Glass Sanctuary',
      author: 'Victor Kane',
      genre: 'Drama',
      available: true,
      pages: '290p'
    },
    {
      id: 3,
      title: 'Chronicles of Dusk',
      author: 'Isabelle Cross',
      genre: 'Epic Fantasy',
      available: false,
      pages: '520p'
    },
    {
      id: 4,
      title: 'Binary Fracture',
      author: 'Nathaniel Brooks',
      genre: 'Cyberpunk',
      available: true,
      pages: '305p'
    },
    {
      id: 5,
      title: 'A Song for Ashes',
      author: 'Clara Monroe',
      genre: 'Tragedy',
      available: false,
      pages: '245p'
    },
    {
      id: 6,
      title: 'Phantom Reverie',
      author: 'Gideon Lowe',
      genre: 'Paranormal',
      available: false,
      pages: '375p'
    },
    {
      id: 7,
      title: 'The Iron Accord',
      author: 'Hannah Ellis',
      genre: 'Military Fiction',
      available: true,
      pages: '430p'
    },
    {
      id: 8,
      title: 'Tales of the Voidwalker',
      author: 'Julian Raynor',
      genre: 'Space Opera',
      available: false,
      pages: '480p'
    },
    {
      id: 9,
      title: 'The Marble Veil',
      author: 'Penelope Lang',
      genre: 'Gothic Fiction',
      available: true,
      pages: '310p'
    },
    {
      id: 10,
      title: 'Echoes of Tomorrow',
      author: 'Miles Turner',
      genre: 'Speculative Fiction',
      available: false,
      pages: '360p'
    }
  ]
}
