import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'This action returns all the coffees'
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns #123 coffee`
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(id: string, @Body() body) {
    return `This action update #${id} coffee`
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes #${id} coffeee`
  }
}
