import { Module } from '@nestjs/common';
import { ConfigModule } from './config';
import { PurchaseModule } from './domain/purchases/PurchaseModule';
import { UserModule } from './domain/users/UserModule';
import { OfferModel } from './infra/db/models';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule,
    UserModule,
    OfferModel,
    PurchaseModule,
    RouterModule.register([
      {
        path: '/v1',
        module: PurchaseModule,
      },
      {
        path: '/v1',
        module: UserModule,
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
