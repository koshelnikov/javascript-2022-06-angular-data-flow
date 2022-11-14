import {Controller, Get, Param, Query} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('login')
export class LoginController {
  constructor(private readonly appService: AppService) {}

  @Get('verify')
  loginVerification(@Query('login') login: string): boolean {
    return login !== 'admin';
  }
}
