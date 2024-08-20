import {
  BadRequestException,
  Body,
  Controller,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { UserService } from './UserService';
import { CreateUser } from './types';
import { AlreadyExistsError } from './errors/AlreadyExistsError';

@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post()
  async create(@Body() body: CreateUser) {
    try {
      return await this.service.create(body);
    } catch (err) {
      if (err instanceof AlreadyExistsError) {
        throw new BadRequestException({
          code: err.code,
          message: err.message,
        });
      }

      throw new InternalServerErrorException(err);
    }
  }
}
