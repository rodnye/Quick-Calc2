import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FrontendService } from './services/frontend/frontend.service';
import path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validate(config) {
        config['lessonsPath'] = path.join(__dirname, '../lessons');

        // for the moment, not have required env

        return config;
      },
      validationSchema: {
        PORT: Number,
        FRONTEND_URL: String,

        lessonPath: String,
      },
    }),
  ],
  controllers: [AppController],
  providers: [ConfigService, FrontendService, AppService],
})
export class AppModule {}
