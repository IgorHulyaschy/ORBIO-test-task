export const MessageClientToken = Symbol('MessageClientToken');

export interface IMessageClient {
  sendMessage<Message>(message: Message): Promise<{ success: boolean }>;
}
