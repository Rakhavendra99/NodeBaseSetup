## Table of Contents
- [Environment](#environment-dependency)
- [Installation](#installation)
- [Usage](#usage)
- [Sample Postman Collection](#postman_collection)
- [Contact](#contact)

## Environment Dependency
- node version: v16.18.0
- npm version: v8.19.2

## Installation
1. Make sure you have Node.js and npm installed.

2. Install dependencies:
    using "npm install".

3. Make sure you have mysql database.
    - mysql version: 8.0.32

4. Sync the database using following steps for the first time.
    - Please refer to the file src/entity/index.js and uncomment lines 34 to 40. 
    - run "npm start" in comment line to create the tables in the database.
    - stop the server and Comment lines 34 to 40 in the file src/entity/index.js.
    - run "npm start" in the command line.

5. Start the server:
    using "npm start".


## Usage
The API is now running and can be accessed at `http://localhost:8081`.

Example API endpoints:
- Register New User : POST `/api/user/register`
- Login : POST `/api/user/login`
- Refresh token : POST `/api/user/refreshToken`

- Get a All product list : GET `/api/product/list`
- Create New Product : POST `/api/product/create`
- Update a specific product by Id : PUT `/api/product/update`
- Delete a specific product by Id : DELETE `/api/product/delete`


## postman_collection
please refer to the [API documentation file](Product_Management.postman_collection.json).

## Contact
- email: "rakhavendra.m@proglint.com"
