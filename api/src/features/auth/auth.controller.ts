import { Body, Controller, Get, HttpCode, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterCredentials, SignInCredentials } from './auth.model';
// @ts-ignore
import { finalize, first, Observable, tap } from 'rxjs';
import { UserWithCredentials } from '../users/user.model';
import { UsersService } from '../users/users.service';
import { auth } from 'firebase-admin/lib/auth/auth-namespace';
import UserRecord = auth.UserRecord;

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

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

  @Get('me') authMe(
    @Res({ passthrough: true }) { locals },
  ): Observable<UserWithCredentials> {
    return this.usersService.findById(locals.userId);
  }
}
