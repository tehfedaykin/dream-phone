import { crushes } from './crushes';
import { Crush } from 'src/app/crush';

type ClueProps = 'name' | 'phone' | 'hangout';
type CrushCard = Pick<Crush, ClueProps>;

enum SpecialCards {
  HangUp = 'Mom says hang up',
  Speakerphone = 'Speakerphone',
  ShareSecret = 'Share a Secret'
}

const crushCards: CrushCard[] = crushes.map((crush) => {
  return {
    name: crush.name,
    phone: crush.phone,
    hangout: crush.hangout
  }
});

export const cards: Array<CrushCard | SpecialCards> = [
  ...crushCards,
  SpecialCards.HangUp,
  SpecialCards.HangUp,
  SpecialCards.HangUp,
  SpecialCards.HangUp,
  SpecialCards.Speakerphone,
  SpecialCards.Speakerphone,
  SpecialCards.Speakerphone,
  SpecialCards.Speakerphone,
  SpecialCards.ShareSecret,
  SpecialCards.ShareSecret,
  SpecialCards.ShareSecret,
  SpecialCards.ShareSecret
];
