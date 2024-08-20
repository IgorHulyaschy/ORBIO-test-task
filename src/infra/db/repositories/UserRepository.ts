import { Injectable } from '@nestjs/common';
import { UserModel } from '../models/UserModel';
import { CreateUser, User } from 'src/domain/users/types';
import { randomUUID } from 'crypto';
import { IUserRepository } from 'src/domain/users/IUserRepository';

@Injectable()
export class UserRepository implements IUserRepository {
  private db: UserModel[] = [];

  async create(data: CreateUser): Promise<User> {
    const user = {
      id: randomUUID(),
      ...data,
    };

    this.db.push(user);

    return user;
  }

  async findOneByEmail(email: string): Promise<User | null> {
    const user = this.db.find((user) => user.email === email);

    if (!user) return null;
    return user;
  }

  async findOne(id: string): Promise<User | null> {
    const user = this.db.find((user) => user.id === id);

    if (!user) return null;
    return user;
  }
}
