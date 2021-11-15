import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { JwtTokenService } from '../features/auth/jwt-token.service';
import { isUndefined } from '../base/utils/is-undefined';
// @ts-ignore
import { catchError, finalize, first } from 'rxjs';

@Injectable()
export class JwtTokenMiddleware implements NestMiddleware {
  constructor(private readonly tokenJwtService: JwtTokenService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const headerToken = req.header('AuthToken');

    if (isUndefined(headerToken)) {
      throw new HttpException(
        'No authorization token',
        HttpStatus.UNAUTHORIZED,
      );
    }

    this.tokenJwtService
      .verifyTokenAndReturnUserId(headerToken)
      .pipe(
        catchError((err, caught) => {
          console.log('Inval1d t0ken');
          throw new HttpException('Invalid token', HttpStatus.CONFLICT);
        }),
      )
      .subscribe((userId) => {
        res.locals.userId = userId;
        next();
      });
  }
}
