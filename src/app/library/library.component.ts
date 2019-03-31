import { Component, OnInit } from '@angular/core';
import { Book } from '../Book';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  public editMode = false;
  public editBook: Book;
   public books: Book[];
  ngOnInit() {
    //debugger
  }

constructor(private srv: BookServiceService) {
  //debugger
this.books = srv.getBooks();
}

  editEmit(item) {
    this.editMode = !this.editMode;
    this.editBook = item;
  }

  saveEmit(book) {
    this.editMode = !this.editMode;
  }
}
