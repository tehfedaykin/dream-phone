export enum Hangouts {
  Mall = 'Crosstown Mall',
  SnackShop = 'E.A.T.S Snack Shop',
  MovieTheater = 'Reel Movies',
  Park = 'Woodland Park',
  Beach = 'High Tide Beach',
  Gym = 'Jim\'s Gym'
}

export enum Sports {
  Baseball = 'Baseball',
  Skateboarding = 'SkateBoarding',
  Volleyball = 'Volleyball',
  Surfing = 'Surfing',
  Baksetball = 'Basketball',
  Tennis = 'Tennis'
}

export enum Food {
  IceCream = 'Ice Cream',
  Cookies = 'Cookies',
  HotDogs = 'Hot Dogs',
  Pizza = 'Pizza',
  Popcorn = 'Popcorn',
  Candy = 'Candy'
}

export enum Clothing {
  Hat = 'Hat',
  Tie = 'Tie',
  Jeans = 'Blue Jeans',
  Jacket = 'Jacket',
  Glasses = 'Glasses',
  Yellow = 'Anything Yellow'
}

export interface Crush {
  name: string;
  phone: number;
  hangout: Hangouts;
  activity: Sports | null;
  food: Food | null;
  clothing: Clothing;
}
