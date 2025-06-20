import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MODULES } from './common/constants/modules';
import { enviroments } from './environment/environment';
import { BookModule } from './book/book.module';
import config from './environment/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
    }),
    ...MODULES,

    
     
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
