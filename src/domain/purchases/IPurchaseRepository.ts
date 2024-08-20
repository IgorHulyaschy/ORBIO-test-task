import { CreatePurchase, Purchase } from './types';

export const PurchaseRepoToken = Symbol('PurchaseRepoToken');

export interface IPurchaseRepository {
  create(data: CreatePurchase): Promise<Purchase>;
}
