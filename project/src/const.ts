import { Sort } from './types/Sort';

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Offer = '/offer/:id',
  Favorite = '/favorites',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}


export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
export const [DEFAULT] = CITIES;

export const SORT_LIST: Sort = {
  DEFAULT: {
    name: 'Popular',
    sortProperty: 'default',
  },
  PRICE_HIGH: {
    name: 'Price: high to low',
    sortProperty: 'price',
  },
  PRICE_LOW: {
    name: 'Price: low to high',
    sortProperty: '-price',
  },
  RATING: {
    name: 'Top rated first',
    sortProperty: 'rating',
  },
};

export const RATING_STARS = [
  {
    name: 'perfect',
    id: 5
  },
  {
    name: 'good',
    id: 4
  },
  {
    name: 'not bad',
    id: 3
  },
  {
    name: 'badly',
    id: 2
  },
  {
    name: 'terribly',
    id: 1
  },
];

export const MAX_RATING = 5;

export const URL_MARKER_DEFAULT = '/img/pin.svg';

export const URL_MARKER_CURRENT = '/img/pin-active.svg';

export const CARD_AMOUNT = 3;
