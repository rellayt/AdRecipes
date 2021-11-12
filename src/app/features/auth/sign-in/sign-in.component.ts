import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RootState } from '../../../core/store/root.state';
import { SignIn } from '../../../core/store/auth/auth.actions';
import { Observable } from 'rxjs';
import { AuthState } from '../../../core/store/auth/auth.reducer';
import { selectAuthState } from '../../../core/store/auth/auth.selectors';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter, tap } from 'rxjs/operators';
import { SnackBarService } from '../../../shared/services/snackbar.service';
import { Router } from '@angular/router';
import { LOGGED } from '../../../core/config/snackbar.config';

@UntilDestroy()
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  authState$: Observable<AuthState> = this.store
    .select(selectAuthState)
    .pipe(untilDestroyed(this));

  isProcessing = false;

  constructor(
    private fb: FormBuilder,
    private store: Store<RootState>,
    private snackbarService: SnackBarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeAuthSubscription();
  }

  private initializeForm(): void {
    this.signInForm = this.fb.group(
      {
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(4)]],
      },
      { updateOn: 'blur' }
    );
  }

  private initializeAuthSubscription(): void {
    this.authState$
      .pipe(
        tap(({ authProcessing }) => (this.isProcessing = authProcessing)),
        tap(() => this.signInForm.reset()),
        filter(({ isAuthenticated }) => Boolean(isAuthenticated))
      )
      .subscribe(() => {
        this.snackbarService.open(LOGGED);
        this.router.navigateByUrl('').then();
      });
  }

  handleLogin(): void {
    const payload = { payload: this.signInForm.value };
    this.store.dispatch(SignIn(payload));
  }
}
