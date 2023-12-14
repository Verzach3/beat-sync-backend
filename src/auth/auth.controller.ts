import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/users/users.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  signIn(@Body() signDto: Record<string, any>) {
    console.log(signDto);
    return this.authService.signIn(signDto.email, signDto.password);
  }

  @Post('register')
  signUp(@Body() signDto: User) {
    return this.authService.signUp(signDto);
  }
}
