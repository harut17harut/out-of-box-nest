import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

import typeorm from './config/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './core/auth/auth.module';
import { UsersModule } from './core/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './src/config/env/development.env',
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return { ...configService.get('typeorm'), migrationsRun: true };
      },
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: DataSource) {}
}
