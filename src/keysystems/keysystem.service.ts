import { KeySystemUser } from '../types';

export abstract class KeySystemService {
  abstract addUser(user: KeySystemUser): Promise<void>;

  abstract getUser(id: string): Promise<KeySystemUser>;

  abstract updateAccessPoints(
    id: string,
    accessPoints: string[],
  ): Promise<void>;

  abstract generatePinCodes(id: string): Promise<string>;
}
