import {
  BadRequestException,
  Body,
  Controller,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { PurchaseService } from './PurchaseService';
import { CreatePurchase } from './types';
import { InvalidInputDataError } from './errors/InvalidInputDataError';

@Controller('purchases')
export class PurchaseController {
  constructor(private readonly service: PurchaseService) {}

  @Post()
  async create(@Body() body: CreatePurchase) {
    try {
      return await this.service.create(body);
    } catch (err) {
      if (err instanceof InvalidInputDataError)
        throw new BadRequestException({
          code: err.code,
          message: err.message,
        });

      throw new InternalServerErrorException(err);
    }
  }
}
