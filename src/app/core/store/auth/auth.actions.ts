import { createAction, props } from '@ngrx/store';
import { User, UserWithCredentials } from '../../models/user.model';
import {
  RegisterCredentials,
  SignInCredentials,
} from '../../models/auth.model';

export const SignIn = createAction(
  '[Auth] Sign In',
  props<{ payload: SignInCredentials }>()
);

export const SignInSuccess = createAction(
  '[Auth] Sign In Success',
  props<{ user: UserWithCredentials }>()
);

export const SignInFailure = createAction(
  '[Auth] Sign In Failure',
  props<{ error: unknown }>()
);

export const Register = createAction(
  '[Auth] Register',
  props<{ payload: RegisterCredentials }>()
);

export const RegisterSuccess = createAction(
  '[Auth] Register Success',
  props<{ user: UserWithCredentials }>()
);

export const RegisterFailure = createAction(
  '[Auth] Register Failure',
  props<{ error: unknown }>()
);

export const TokenValidation = createAction('[Auth] Validate token');

export const TokenValidationSuccess = createAction(
  '[Auth] Token Validation Success',
  props<{ user: User }>()
);

export const TokenValidationFailure = createAction(
  '[Auth] Token Validation Failure',
  props<{ error: unknown }>()
);

export const Logout = createAction('[Auth] Logout');
