import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthState } from '../../../core/store/auth/auth.reducer';
import { selectAuthState } from '../../../core/store/auth/auth.selectors';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { RootState } from '../../../core/store/root.state';
import { SnackBarService } from '../../../shared/services/snackbar.service';
import { Router } from '@angular/router';
import { filter, tap } from 'rxjs/operators';
import { REGISTERED } from '../../../core/config/snackbar.config';
import { Register } from '../../../core/store/auth/auth.actions';

@UntilDestroy()
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

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
    this.signUpForm = this.fb.group(
      {
        displayName: [
          null,
          [
            Validators.required,
            Validators.pattern('[A-Za-z]*'),
            Validators.minLength(3),
          ],
        ],
        email: [
          null,
          [Validators.required, Validators.email, Validators.minLength(4)],
        ],
        password: [null, [Validators.required, Validators.minLength(4)]],
      },
      { updateOn: 'blur' }
    );
  }

  private initializeAuthSubscription(): void {
    this.authState$
      .pipe(
        tap(({ authProcessing }) => (this.isProcessing = authProcessing)),
        filter(({ isAuthenticated }) => Boolean(isAuthenticated))
      )
      .subscribe(() => {
        this.snackbarService.open(REGISTERED);
        this.router.navigateByUrl('').then();
      });
  }

  handleRegistration(): void {
    const payload = { payload: this.signUpForm.value };
    this.store.dispatch(Register(payload));
  }
}
