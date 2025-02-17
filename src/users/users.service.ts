import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'INTERN',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      role: 'ENGINEER',
    },
    {
      id: 4,
      name: 'Bob Brown',
      email: 'bob.brown@example.com',
      role: 'ENGINEER',
    },
    {
      id: 5,
      name: 'Charlie Davis',
      email: 'charlie.davis@example.com',
      role: 'ADMIN',
    },
  ];

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    // * Only return users with the specified role
    if (role) {
      const rolesArray = this.users.filter((user) => user.role === role);
      // * Throw an error if no user with the specified role is found
      if (!rolesArray.length)
        throw new NotFoundException('User Role Not Found');

      return rolesArray;
    }
    return this.users;
  }

  findOne(id: number) {
    // * Return the user with the specified id
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundException('User Not Found');

    return user;
  }

  create(createUserDto: CreateUserDto) {
    // * Find the user with the highest id
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    // * Create a new user with the next id
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...createUserDto,
    };
    // * Add the new user to the users array
    this.users.push(newUser);
    // * Return the new user
    return newUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.users.map((user) => {
      if (user.id === id) {
        // * Update the user with the specified id
        return {
          ...user,
          ...updateUserDto,
        };
      }
      return user;
    });

    // * Return the updated user
    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    // * Remove the user with the specified id
    this.users = this.users.filter((user) => user.id !== id);
    // * Return the removed user
    return removedUser;
  }
}
