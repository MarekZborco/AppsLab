import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

import { BookComponent } from '../book/book.component';
import { Book } from './models/book';
import { LibraryServiceService } from '../library-service.service';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [CommonModule, BookComponent,NgFor ],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})

export class LibraryComponent {

  isLoading:boolean;

  listOfBooks!: Book[];

  constructor(private bookRetrievalService: LibraryServiceService) {
    this.isLoading = true;
  
    this.bookRetrievalService.getListOfBooks().subscribe(
      (data: Book[]) => {
        this.listOfBooks = data;
        console.log(this.listOfBooks);
        this.isLoading = false; // Dáta sa načítali
      },
      (error) => {
        console.error('Error:', error.message); // Logovanie chyby
        this.isLoading = false; // Nastaviť isLoading na false pri chybe
      }
    );
  }
  
}