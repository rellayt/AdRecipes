export interface BaseCredentials {
  email: string;
  password: string;
}

export interface SignInCredentials extends BaseCredentials {}

export interface RegisterCredentials extends BaseCredentials {
  displayName: string;
}

export interface TokenCredentials {
  token: string;
  refreshToken: string;
}
