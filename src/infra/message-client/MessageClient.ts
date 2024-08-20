import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageClient {
  async sendMessage<Message>(message: Message) {
    return { success: true };
  }
}
