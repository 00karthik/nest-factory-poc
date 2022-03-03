import { Module } from '@nestjs/common';

import { AkilesKeySystemService } from './akiles/akiles.service';
import { GlutzKeySystemService } from './glutz/glutz.service';

import { keySystemFactoryService } from './keysystemFactory.service';

@Module({
  imports: [],
  controllers: [],
  providers: [
    GlutzKeySystemService,
    AkilesKeySystemService,
    keySystemFactoryService,
  ],
  exports: [keySystemFactoryService],
})
export class KeysystemModule {}
