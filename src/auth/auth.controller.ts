import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/users/users.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signDto: Record<string, any>) {
    return this.authService.signIn(signDto.email, signDto.password);
  }

  @Post('register')
  signUp(@Body() signDto: User) {
    return this.authService.signUp(signDto);
  }
}
