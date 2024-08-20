import { Inject, Injectable } from '@nestjs/common';
import { CreatePurchase } from './types';
import { IPurchaseRepository, PurchaseRepoToken } from './IPurchaseRepository';
import { IMessageClient, MessageClientToken } from './IMessageClient';
import { OfferService } from '../offers/OfferService';
import { UserService } from '../users/UserService';
import { InvalidInputDataError } from './errors/InvalidInputDataError';

@Injectable()
export class PurchaseService {
  constructor(
    @Inject(PurchaseRepoToken) private readonly repository: IPurchaseRepository,
    @Inject(MessageClientToken) private readonly messageClient: IMessageClient,
    private readonly offerService: OfferService,
    private readonly userService: UserService,
  ) {}

  async create(data: CreatePurchase) {
    await this.validateCreation(data);
    const purchase = await this.repository.create(data);

    await Promise.allSettled([
      this.messageClient.sendMessage({
        type: 'CREATED_EVENT',
        payload: purchase,
      }),
      this.messageClient.sendMessage({
        type: 'ASTROLOGICAL_REPORT',
        payload: purchase,
      }),
    ]);

    return purchase;
  }

  private async validateCreation(data: CreatePurchase) {
    const [user, offer] = await Promise.all([
      this.userService.get(data.userId),
      this.offerService.get(data.offerId),
    ]);

    if (!user || !offer) throw new InvalidInputDataError();
  }
}
