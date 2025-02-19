<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

## Description

This is a simple project to demonstrate how to use the NestJS framework to create a REST API. 
The project is a simple CRUD API for managing a list of employees.

## Routes

The API provides the following endpoints:

#### 1. Get All Employees

Endpoint: GET `/v1/employees`: Retrieves a list of all employees.

#### 2. Get a Single Employee

Endpoint: GET `/v1/employees/:id`: Retrieves a specific employee by their unique ID.

#### 3. Create an Employee

Endpoint: POST `/v1/employees`: Adds a new employee to the list.Request Body Example:
```bash
{
  "name": "",
  "email": "",
  # Role Possible values: "INTERN", "ENGINEER", "ADMIN"
  "role": ""
}
```

#### 4. Update an Employee

Endpoint: PATCH `/v1/employees/:id`: Updates details of an existing employee by ID.Request Body Example (partial update):
```bash
{
  "role": ""
}
```

#### 5. Delete an Employee

Endpoint: DELETE `/v1/employees/:id`: Removes an employee from the list by their ID.

## Technologies

- [NestJS](https://nestjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Neon](https://www.neon.tech/)
- [Prisma](https://www.prisma.io/)


## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## License

This project is licensed under the [MIT License](https://github.com/nestjs/nest/blob/master/LICENSE).