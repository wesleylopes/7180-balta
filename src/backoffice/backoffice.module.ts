import { Module } from '@nestjs/common';
import { CustomerController } from './controllers/customer.controller';

@Module({
    imports: [],
    controllers: [CustomerController],
    providers: [],
  })
export class BackofficeModule { 

}
