import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterCredentials, SignInCredentials } from './auth.model';
import { Observable } from 'rxjs';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  @HttpCode(200)
  signIn(@Body() signInCredentials: SignInCredentials): Observable<any> {
    // throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    try {
      return this.authService.signIn(signInCredentials);
    } catch (err) {
      console.log('EEERRROR', err);
    }
  }

  @Post('register') register(
    @Body() registerCredentials: RegisterCredentials,
  ): Observable<any> {
    return this.authService.register(registerCredentials);
  }
}
