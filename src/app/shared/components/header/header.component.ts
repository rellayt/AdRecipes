import { Component, ViewChild } from '@angular/core';
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
import { MatDialog } from '@angular/material/dialog';
import { MobileLinksDialogComponent } from '../mobile-links-dialog/mobile-links-dialog.component';
import { first } from 'rxjs/operators';
import { isNotUndefined } from '../../../core/utility/is-not-undefined';
import { MatButton } from '@angular/material/button';
import { isUndefined } from '../../../core/utility/is-undefined';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private mobileButtonRef: MatButton;

  @ViewChild('button') set buttonRef(mobileButtonRef: MatButton) {
    if (isNotUndefined(mobileButtonRef)) {
      this.mobileButtonRef = mobileButtonRef;
    }
  }

  user$: Observable<User> = this.store.select(selectUser);

  authProcessing$: Observable<Boolean> =
    this.store.select(selectAuthProcessing);

  constructor(
    private store: Store<RootState>,
    private router: Router,
    public dialog: MatDialog
  ) {}

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

  openMobileDialog(): void {
    this.dialog
      .open(MobileLinksDialogComponent, {
        autoFocus: false,
        restoreFocus: false,
      })
      .afterClosed()
      .pipe(first())
      .subscribe((route: string | undefined) => {
        if (isUndefined(route)) {
          return;
        }

        if (route === 'logout') {
          this.logout();
          return;
        }

        this.router.navigateByUrl(route).then();
      });
  }
}
