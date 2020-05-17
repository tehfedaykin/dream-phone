import { crushes } from './crushes';
import { Crush } from 'src/app/crush';

type ClueProps = 'name' | 'phone' | 'hangout';
export type CrushCard = Pick<Crush, ClueProps>;

export enum SpecialCards {
  HangUp = 'Mom says hang up!',
  Speakerphone = 'Speakerphone',
  ShareSecret = 'Share a secret'
}

export const cards: Array<CrushCard> = crushes.map((crush: Crush) => {
  return {
    name: crush.name,
    phone: crush.phone,
    hangout: crush.hangout
  }
});

