import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { AuthSignupDto } from './dto/auth-signup.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async signUp(dto: AuthSignupDto) {
    console.log(dto);

    const isExists = await this.usersService.findOne(dto.email);

  }
}
