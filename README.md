# CMPSC 421 - Ian Timchak
#### NodeJS + Express

### Documentation

## API Routes

### Account Routes

- **POST /accounts**
  - Description: Create a new account
  - Controller: `accountController.create`

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
