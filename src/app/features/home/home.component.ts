import { Component, OnInit } from '@angular/core';
import { RootState } from '../../core/store/root.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<RootState>) {}

  ngOnInit(): void {}
}
