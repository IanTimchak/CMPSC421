# CMPSC 421 - Ian Timchak
#### NodeJS + Express

### Documentation

## API Routes

### Account Routes

- **PUT /accounts/:id/edit**
  - Description: Update an existing account
  - Controller: `accountController.edit`

- **DELETE /accounts/:id/delete**
  - Description: Delete an account
  - Controller: `accountController.delete`

- **GET /accounts/:id**
  - Description: Retrieve a single account
  - Controller: `accountController.show`

### Order Routes

- **POST /orders**
  - Description: Create a new order
  - Controller: `orderController.create`

- **POST /orders/cart**
  - Description: Append to cart (create a new order object with "Order Not Committed" status)
  - Controller: `orderController.appendCart`

- **PUT /orders/:id/update**
  - Description: Update an existing order
  - Controller: `orderController.update`

- **DELETE /orders/:id/delete**
  - Description: Delete an order
  - Controller: `orderController.delete`

- **GET /orders/:id**
  - Description: Retrieve a single order
  - Controller: `orderController.getOrder`

- **GET /orders/cart**
  - Description: Retrieve user carts
  - Controller: `orderController.getUserCarts`

### Product Routes

- **POST /products**
  - Description: Create a new product
  - Controller: `productController.create`

- **PUT /products/:id/edit**
  - Description: Update an existing product
  - Controller: `productController.edit`

- **DELETE /products/:id/delete**
  - Description: Delete a product
  - Controller: `productController.delete`

- **GET /products/:id**
  - Description: Retrieve a single product
  - Controller: `productController.getProduct`

### Auth Routes

- **POST /auth/signup**
  - Description: Sign up a new user
  - Controller: `authController.signup`

- **POST /auth/login**
  - Description: Log in an existing user
  - Controller: `authController.login`


## Setup Instructions

### Setting up `dist.env`

To set up the environment variables for this project, follow these steps:

1. Create a `.env` file in the root directory of the project.
2. Copy the contents of `dist.env` into the newly created `.env` file.
3. Update the values in the `.env` file with your specific configuration.
4. Save the `.env` file.

### Running the Project

1. Install the dependencies:

    ```sh
    npm install
    ```

2. Start the server:

    ```sh
    npm run start
    ```

## Planned Changes

### Features to be Implemented

- **Verbose API response**
    - Did not get around to creating verbose/data functional API responses

- **DB schematics and data manip**
    - The DB connection works and I can interact with the db via my api responses, however the actual database hookups are not complete and no data is created, changed, or deleted. It is currently set up to be implemented.