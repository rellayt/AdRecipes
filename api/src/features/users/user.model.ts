import { RegisterCredentials, TokenCredentials } from '../auth/auth.model';

export interface User extends Omit<RegisterCredentials, 'password'> {
  tokenCredentials?: TokenCredentials;
}
