import { Component } from '@angular/core';

export interface Book {
  name: string;
  count: number;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  public book: Book = {
    name: "Eloquent JavaScript",
    count: 0
  };

  public onAddBook() {
    this.book.count += 1;
    this.book = {...this.book}
  }
}
