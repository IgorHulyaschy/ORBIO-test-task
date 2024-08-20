import { Module } from '@nestjs/common';
import { OfferRepository } from './OfferRepository';
import { UserRepoToken } from 'src/domain/users/IUserRepository';
import { OfferRepoToken } from 'src/domain/offers/IOfferRepository';
import { UserRepository } from './UserRepository';
import { PurchaseRepoToken } from 'src/domain/purchases/IPurchaseRepository';
import { PurchaseRepository } from './PurchaseRepository';

@Module({
  providers: [
    {
      provide: OfferRepoToken,
      useClass: OfferRepository,
    },
    {
      provide: UserRepoToken,
      useClass: UserRepository,
    },
    {
      provide: PurchaseRepoToken,
      useClass: PurchaseRepository,
    },
  ],
  exports: [OfferRepoToken, UserRepoToken, PurchaseRepoToken],
})
export class RepositoriesModule {}
