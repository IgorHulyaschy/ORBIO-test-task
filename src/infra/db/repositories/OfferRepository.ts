import { Injectable } from '@nestjs/common';
import { IOfferRepository } from 'src/domain/offers/IOfferRepository';
import { Offer } from 'src/domain/offers/types';

@Injectable()
export class OfferRepository implements IOfferRepository {
  private readonly db: Offer[] = [
    {
      id: '1',
      name: 'Offer 1',
      price: 100,
    },
    {
      id: '2',
      name: 'Offer 2',
      price: 200,
    },
  ];

  async findOne(id: string): Promise<Offer | null> {
    const model = this.db.find((item) => item.id === id);

    if (!model) return null;

    return {
      id: model.id,
      name: model.name,
      price: model.price,
    };
  }
}
