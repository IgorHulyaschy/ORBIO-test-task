import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository, UserRepoToken } from './IUserRepository';
import { CreateUser, User } from './types';
import { AlreadyExistsError } from './errors/AlreadyExistsError';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserRepoToken) private readonly repository: IUserRepository,
  ) {}

  async create(data: CreateUser): Promise<{ id: string }> {
    const existedUser = await this.repository.findOneByEmail(data.email);

    if (existedUser) throw new AlreadyExistsError();

    const created = await this.repository.create(data);
    return { id: created.id };
  }

  get(id: string): Promise<User | null> {
    return this.repository.findOne(id);
  }
}
