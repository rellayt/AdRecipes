export interface UserWithCredentials {
  id: string;
  displayName: string;
  email: string;
  tokenCredentials: TokenCredentials;
}

export interface BaseCredentials {
  email: string;
  password: string;
  displayName?: string;
}

export interface TokenCredentials {
  accessToken: string;
  refreshToken: string;
}
