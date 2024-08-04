import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from './database/database.service';
import { Prisma, User } from '@prisma/client';


@Injectable()
export class AppService {
  constructor(private readonly databaseService: DatabaseService) {}

  // Create a new user
  async create(name: string): Promise<Prisma.UserCreateInput> {
    return this.databaseService.user.create({
      data: { name },
    });
  }

  // Get all users
  async findAll(): Promise<User[]> {
    return this.databaseService.user.findMany();
  }

  // Get a user by ID
  async findOne(id: string): Promise<User> {
    const user = await this.databaseService.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  // Update a user by ID
  async update(id: string, name: string): Promise<User> {
    const user = await this.databaseService.user.update({
      where: { id },
      data: { name },
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  // Delete a user by ID
  async remove(id: string): Promise<User> {
    const user = await this.databaseService.user.delete({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }
}
