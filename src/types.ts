import { KeySystemService } from './keysystems/keysystem.service';

export interface KeySystemUser {
  label: string;
  accessPoints: string[];
}

export enum KeySystemTypes {
  GLUTZ = 'glutz',
  AKILES = 'akiles',
}

export interface KeySystemMap {
  [type: string]: KeySystemService;
}
