import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'This action returns all the coffees'
  }

  @Get(':id')
  findOne(@Param(':id') id: string) {
    return `This action returns #123 coffee`
  }

  @Post()
  create(@Body() body) {
    return body;
  }
}
