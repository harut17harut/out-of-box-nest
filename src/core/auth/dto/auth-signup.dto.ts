import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class AuthSignupDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  // @IsNotEmpty()
  lastName: string;
}
