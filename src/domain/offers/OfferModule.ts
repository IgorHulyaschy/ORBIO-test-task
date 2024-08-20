import { Module } from '@nestjs/common';
import { RepositoriesModule } from 'src/infra/db/repositories/RepositoriesModule';
import { OfferService } from './OfferService';

@Module({
  imports: [RepositoriesModule],
  providers: [OfferService],
  exports: [OfferService],
})
export class OfferModule {}
