import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from '../../../core/store/root.state';
import { Observable } from 'rxjs';
import {
  selectAuthProcessing,
  selectUser,
} from '../../../core/store/auth/auth.selectors';
import { Router } from '@angular/router';
import { User } from '../../../core/models/user.model';
import { Logout } from '../../../core/store/auth/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user$: Observable<User> = this.store.select(selectUser);

  authProcessing$: Observable<Boolean> =
    this.store.select(selectAuthProcessing);

  constructor(private store: Store<RootState>, private router: Router) {}

  ngOnInit(): void {}

  goToLogin(): void {
    this.router.navigateByUrl('sign-in').then();
  }

  goToRegister(): void {
    this.router.navigateByUrl('sign-up').then();
  }

  logout(): void {
    this.router.navigateByUrl('').then();
    this.store.dispatch(Logout());
  }
}
