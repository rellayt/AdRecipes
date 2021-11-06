import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterCredentials, SignInCredentials } from './auth.model';
import { Observable } from 'rxjs';
import { UserWithCredentials } from '../users/user.model';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  @HttpCode(200)
  signIn(
    @Body() signInCredentials: SignInCredentials,
  ): Observable<UserWithCredentials> {
    return this.authService.signIn(signInCredentials);
  }

  @Post('register') register(
    @Body() registerCredentials: RegisterCredentials,
  ): Observable<UserWithCredentials> {
    return this.authService.register(registerCredentials);
  }
}
