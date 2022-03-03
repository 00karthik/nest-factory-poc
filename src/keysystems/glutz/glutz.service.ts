import { KeySystemUser } from 'src/types';
import { KeySystemService } from '../keysystem.service';
import { GlutzHelperService } from './glutz.helper.service';

export class GlutzKeySystemService implements KeySystemService {
  constructor(private readonly glutzHelperService: GlutzHelperService) {}

  async addUser(user: KeySystemUser): Promise<void> {
    this.glutzHelperService.addMetaData();
    console.log('Adding glutz user', user);
  }

  async getUser(id: string): Promise<KeySystemUser> {
    console.log('Getting glutz user', id);
    return {
      label: 'Glutz User',
      accessPoints: [],
    };
  }
  async updateAccessPoints(id: string, accessPoints: string[]): Promise<void> {
    console.log('updating glutz accesspoints', id, accessPoints);
  }

  async generatePinCodes(id: string): Promise<string> {
    console.log('generating glutz pin codes', id);
    return '1234';
  }
}
