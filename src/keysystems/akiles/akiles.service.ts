import { KeySystemUser } from 'src/types';
import { KeySystemService } from '../keysystem.service';

export class AkilesKeySystemService implements KeySystemService {
  async addUser(user: KeySystemUser): Promise<void> {
    console.log('Adding akiles user', user);
  }

  async getUser(id: string): Promise<KeySystemUser> {
    console.log('Getting akiles user', id);
    return {
      label: 'akiles User',
      accessPoints: [],
    };
  }

  async updateAccessPoints(id: string, accessPoints: string[]): Promise<void> {
    console.log('updating akiles accesspoints', id, accessPoints);
  }

  async generatePinCodes(id: string): Promise<string> {
    console.log('generating akiles pin codes', id);
    return '1234';
  }
}
