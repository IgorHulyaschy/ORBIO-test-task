import { Injectable } from '@nestjs/common';
import { IPurchaseRepository } from 'src/domain/purchases/IPurchaseRepository';
import { CreatePurchase, Purchase } from 'src/domain/purchases/types';
import { PurchaseModel } from '../models/PurchaseModel';
import { randomUUID } from 'crypto';

@Injectable()
export class PurchaseRepository implements IPurchaseRepository {
  private readonly db: PurchaseModel[] = [];
  async create(data: CreatePurchase): Promise<Purchase> {
    const purchase = {
      id: randomUUID(),
      ...data,
    };

    this.db.push(purchase);

    return purchase;
  }
}
