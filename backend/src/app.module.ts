import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FrontendService } from './frontend/frontend.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validate(config) {
        return config;
      },
      validationSchema: {
        PORT: Number,
        FRONTEND_URL: String,
      },
    }),
  ],
  controllers: [AppController],
  providers: [ConfigService, FrontendService, AppService],
})
export class AppModule {}
