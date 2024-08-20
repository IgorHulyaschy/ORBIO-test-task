import { Inject, Injectable } from '@nestjs/common';
import { Offer } from './types';
import { IOfferRepository, OfferRepoToken } from './IOfferRepository';

@Injectable()
export class OfferService {
  constructor(
    @Inject(OfferRepoToken) private readonly repository: IOfferRepository,
  ) {}

  get(id: string): Promise<Offer | null> {
    return this.repository.findOne(id);
  }
}
