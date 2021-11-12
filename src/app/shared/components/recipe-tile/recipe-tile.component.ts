import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface RecipeTile {
  id: string;
  authorName?: string;
  time: string;
  name: string;
  photoUrl: string;
}

@Component({
  selector: 'app-recipe-tile',
  templateUrl: './recipe-tile.component.html',
  styleUrls: ['./recipe-tile.component.scss'],
})
export class RecipeTileComponent {
  @Input() recipeTile: RecipeTile;

  @HostListener('click', ['$event'])
  goToDetails(): void {
    this.router.navigate(['recipe', this.recipeTile.id]).then();
  }

  constructor(private router: Router) {}
}
