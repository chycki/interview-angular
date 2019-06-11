import { Component, Input } from '@angular/core';
import { Book } from "./app.component";

// changeDetection: ChangeDetectionStrategy.OnPush,

@Component({
  selector: 'book-item',
  template: `
  <ul>
    <li>
      Name: {{book.name}}, Count: <span>{{book.count}}</span>
    </li>
  </ul>
  `,
  styles: ["span {font-weight: bold; color: red; font-size: 18px}"]
})
export class BookItemComponent  {
  @Input() book: Book;
}
