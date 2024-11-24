import { Component, Input } from '@angular/core';

import { CommonModule, NgIf } from '@angular/common';
import { Book } from '../library/models/book';


@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent {
  @Input() book!: Book;

  onOrder() {
    this.book.available = false;
  }
}