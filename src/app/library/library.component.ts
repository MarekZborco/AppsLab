import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../../models/book';
import { BookComponent } from '../book/book.component';

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
      title: 'The Silent Forest',
      author: 'John Smith',
      genre: 'Horror',
      available: true,
      pages: '300p'
    },
    {
      id: 2,
      title: 'Shadows of the Past',
      author: 'Alice Johnson',
      genre: 'Mystery',
      available: false,
      pages: '250p'
    },
    {
      id: 3,
      title: 'Echoes in the Dark',
      author: 'Robert Black',
      genre: 'Thriller',
      available: true,
      pages: '320p'
    },
    
      {
            id: 4,
            title: 'The Lost Kingdom',
            author: 'Emily Davis',
            genre: 'Fantasy',
            available: true,
            pages: '400p'
          },
          {
            id: 5,
            title: 'Beneath the Ice',
            author: 'Michael White',
            genre: 'Adventure',
            available: false,
            pages: '280p'
          },
          {
            id: 6,
            title: 'Whispers in the Wind',
            author: 'Sophie Miller',
            genre: 'Romance',
            available: true,
            pages: '230p'
          },
          {
            id: 7,
            title: 'Fires of Rebellion',
            author: 'David Wilson',
            genre: 'Historical Fiction',
            available: true,
            pages: '360p'
          },
          {
            id: 8,
            title: 'The Hidden Truth',
            author: 'Laura Adams',
            genre: 'Crime',
            available: false,
            pages: '310p'
          },
          {
            id: 9,
            title: 'Rise of the Machines',
            author: 'James Baker',
            genre: 'Science Fiction',
            available: true,
            pages: '290p'
          },
          {
            id: 10,
            title: 'The Last Stand',
            author: 'Helen Turner',
            genre: 'Post-Apocalyptic',
            available: true,
            pages: '340p'
          }
      
        ];
      }
      
