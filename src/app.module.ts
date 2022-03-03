import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { KeysystemModule } from './keysystems/keysystem.module';

@Module({
  imports: [KeysystemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
