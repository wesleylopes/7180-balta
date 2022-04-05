import { Controller, Delete, Get, Post, Put, Param, Body } from '@nestjs/common';
import { Customer } from '../models/customer.model';

@Controller('v1/customers')
export class CustomerController {
    @Get()
    get() {
        return 'Obter os clientes';

    }

    @Get(':document')
    getById(@Param('document') document: string) {
      return 'Obter o cliente' + document;

    }

    @Post()
    post(@Body() body: Customer) {
      return body.name;

    }

    @Put()
    put(@Param('document') document, @Body() body) {
        return {
            customer: document,
            data: body,
        };

    }

    @Delete()
    delete() {
        return 'Deletar cliente ';

    }


}
