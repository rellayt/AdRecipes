import { Component, OnInit } from '@angular/core';
import { TILE_SIZE } from '../../shared/components/recipe-tile/recipe-tile.component';
import { RootState } from '../../core/store/root.state';
import { Store } from '@ngrx/store';
import { SignIn } from '../../core/store/auth/auth.actions';
import { UserWithCredentials } from '../../core/models/user.model';
import { Observable } from 'rxjs';
import { selectUserWithCredentials } from '../../core/store/auth/auth.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  firstTileSize = TILE_SIZE.BIG;

  user$: Observable<UserWithCredentials> = this.store.select(
    selectUserWithCredentials
  );

  constructor(private store: Store<RootState>) {}

  ngOnInit(): void {
    const payload = {
      payload: {
        email: 'elo8@wp.pl',
        password: 'asd123',
      },
    };
    this.store.dispatch(SignIn(payload));
  }
}
