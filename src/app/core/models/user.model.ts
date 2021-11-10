export interface UserWithCredentials extends User {
  tokenCredentials: TokenCredentials;
}

export interface User {
  email: string;
  password: string;
  displayName?: string;
}

export interface TokenCredentials {
  accessToken: string;
  refreshToken: string;
}
