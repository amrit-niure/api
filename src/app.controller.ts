import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Create a new user
  @Post()
  async create(@Body('name') name: string) {
    return this.appService.create(name);
  }

  // Get all users
  @Get()
  async findAll() {
    return this.appService.findAll();
  }

  // Get a user by ID
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.appService.findOne(id);
  }

  // Update a user by ID
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body('name') name: string
  ) {
    return this.appService.update(id, name);
  }

  // Delete a user by ID
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.appService.remove(id);
  }
}
