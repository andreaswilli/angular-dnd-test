import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dnd-test';
  twoDimArray: Array<object[]> = [
    [{ card: this.getRandomCard(), hidden: true }, { card: this.getRandomCard(), hidden: true }, { card: this.getRandomCard(), hidden: true }],
    [{ card: this.getRandomCard(), hidden: true }, { card: this.getRandomCard(), hidden: true }, { card: this.getRandomCard(), hidden: true }],
    [{ card: this.getRandomCard(), hidden: true }, { card: this.getRandomCard(), hidden: true }, { card: this.getRandomCard(), hidden: true }],
    [{ card: this.getRandomCard(), hidden: true }, { card: this.getRandomCard(), hidden: true }, { card: this.getRandomCard(), hidden: true }],
  ];
  imageUrl: string = 'https://deckofcardsapi.com/static/img/';

  drop(event: CdkDragDrop<string[]>): void {
    if (event.container === event.previousContainer) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
  
  getRandomCard(): string {
    const suits = ['H', 'S', 'C', 'D'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K', 'A'];
    return `${values[Math.floor(Math.random() * values.length)]}${suits[Math.floor(Math.random() * suits.length)]}`;
  }

  toggleCard(item: object): void {
    // @ts-ignore
    let card = this.twoDimArray.find(array => array.find(i => i === item)).find(i => i === item);
    card.hidden = !card.hidden;
  }
}
