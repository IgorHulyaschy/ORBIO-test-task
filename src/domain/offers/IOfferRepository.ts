import { Offer } from './types';

export const OfferRepoToken = Symbol('OfferRepoToken');

export interface IOfferRepository {
  findOne(id: string): Promise<Offer | null>;
}
