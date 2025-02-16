import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

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
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    // * Return the user with the specified id
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  create(user: {
    name: string;
    email: string;
    role: 'INTERN' | 'ENGINEER' | 'ADMIN';
  }) {
    // * Find the user with the highest id
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    // * Create a new user with the next id
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...user,
    };
    // * Add the new user to the users array
    this.users.push(newUser);
    // * Return the new user
    return newUser;
  }

  update(
    id: number,
    updatedUser: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    this.users.map((user) => {
      if (user.id === id) {
        // * Update the user with the specified id
        return {
          ...user,
          ...updatedUser,
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
