import { CreateUser, User } from './types';

export const UserRepoToken = Symbol('UserRepoToken');

export interface IUserRepository {
  create(data: CreateUser): Promise<User>;
  findOne(id: string): Promise<User | null>;
  findOneByEmail(email: string): Promise<User | null>;
}
