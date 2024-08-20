import { Module } from '@nestjs/common';
import { MessageClient } from './MessageClient';
import { MessageClientToken } from 'src/domain/purchases/IMessageClient';

@Module({
  providers: [
    {
      provide: MessageClientToken,
      useClass: MessageClient,
    },
  ],
  exports: [MessageClientToken],
})
export class MessageClientModule {}
