import { TokenCredentials } from '../auth/auth.model';

export interface UserWithCredentials {
  id: string;
  displayName: string;
  email: string;
  tokenCredentials?: TokenCredentials;
}
