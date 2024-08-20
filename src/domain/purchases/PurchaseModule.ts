import { Module } from '@nestjs/common';
import { RepositoriesModule } from 'src/infra/db/repositories';
import { PurchaseService } from './PurchaseService';
import { PurchaseController } from './PurchaseController';
import { MessageClientModule } from 'src/infra/message-client/MessageClientModule';
import { UserModule } from '../users/UserModule';
import { OfferModule } from '../offers/OfferModule';

@Module({
  imports: [RepositoriesModule, MessageClientModule, UserModule, OfferModule],
  providers: [PurchaseService],
  controllers: [PurchaseController],
})
export class PurchaseModule {}
