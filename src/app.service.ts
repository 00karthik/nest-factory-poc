import { Inject, Injectable } from '@nestjs/common';
import { KEY_SYSTEM_SERVICES } from './providers';
import { KeySystemMap, KeySystemTypes } from './types';

@Injectable()
export class AppService {
  constructor(
    @Inject(KEY_SYSTEM_SERVICES)
    private readonly keySystemFactoryMap: KeySystemMap,
  ) {}
  getHello(): string {
    const a = this.keySystemFactoryMap[KeySystemTypes.GLUTZ].getUser('XYZ');
    console.log(a);
    return 'aa';
  }
}
