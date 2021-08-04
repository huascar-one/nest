import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getHello(): string {
    return 'ewe';
  }
}
