import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from '../../../core/store/root.state';
import { Observable } from 'rxjs';
import { selectIsAuthenticated } from '../../../core/store/auth/auth.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated$: Observable<boolean> = this.store.select(
    selectIsAuthenticated
  );

  constructor(private store: Store<RootState>, private router: Router) {}

  ngOnInit(): void {}

  goToLogin(): void {
    this.router.navigateByUrl('sign-in').then();
  }

  goToRegister(): void {
    this.router.navigateByUrl('sign-up').then();
  }
}
