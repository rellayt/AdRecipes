import { createAction, props } from '@ngrx/store';
import { UserWithCredentials } from '../../models/user.model';
import { SignInCredentials } from '../../../../../api/dist/features/auth/auth.model';

export const SignIn = createAction(
  '[Auth] Sign in',
  props<{ payload: SignInCredentials }>()
);

export const SignInSuccess = createAction(
  '[Auth] Sign in',
  props<{ user: UserWithCredentials }>()
);

export const SignInFailure = createAction('[Auth] Sign in', props<any>());
