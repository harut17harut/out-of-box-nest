import { Body, Controller, Post } from '@nestjs/common';
import { AuthSignupDto } from './dto/auth-signup.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('sign-up')
  signUp(@Body() body: AuthSignupDto) {
    return this.authService.signUp(body);
  }
}
