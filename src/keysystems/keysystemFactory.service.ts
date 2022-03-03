import { FactoryProvider } from '@nestjs/common';
import { KEY_SYSTEM_SERVICES } from 'src/providers';
import { KeySystemMap, KeySystemTypes } from 'src/types';
import { AkilesKeySystemService } from './akiles/akiles.service';
import { GlutzKeySystemService } from './glutz/glutz.service';

export const keySystemFactoryService: FactoryProvider<KeySystemMap> = {
  provide: KEY_SYSTEM_SERVICES,
  useFactory: (
    glutzKeySystemService: GlutzKeySystemService,
    akilesKeySystemService: AkilesKeySystemService,
  ) => {
    return {
      [KeySystemTypes.GLUTZ]: glutzKeySystemService,
      [KeySystemTypes.AKILES]: akilesKeySystemService,
    };
  },
  inject: [GlutzKeySystemService, AkilesKeySystemService],
};
