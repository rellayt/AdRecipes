import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface RecipeTile {
  id: string;
  author: string;
  time: string;
  name: string;
}

@Component({
  selector: 'app-recipe-tile',
  templateUrl: './recipe-tile.component.html',
  styleUrls: ['./recipe-tile.component.scss'],
})
export class RecipeTileComponent {
  src =
    'https://i.dobrzemieszkaj.pl/i/71/99/74/r3/1920/pyszne-przepisy-na-piknik-proste-szybkie-i-smaczne.jpg';

  @Input() recipeTileInfo: RecipeTile = {
    id: '1',
    author: 'User1',
    time: '15 min',
    name: 'Pizza',
  };

  @HostListener('click', ['$event'])
  goToDetails(): void {
    this.router.navigate(['recipe', this.recipeTileInfo.id]).then();
  }

  constructor(private router: Router) {}
}
