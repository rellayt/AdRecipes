import { Controller, Get } from '@nestjs/common';

@Controller()
export class ApplicationController {
  @Get()
  root(): string {
    return 'Recipes API';
  }
}
