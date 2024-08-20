import { RepositoriesModule } from 'src/infra/db/repositories';
import { UserService } from './UserService';
import { Module } from '@nestjs/common';
import { UserController } from './UserController';

@Module({
  imports: [RepositoriesModule],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
