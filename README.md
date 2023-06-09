# E-commerce store - Front-end Project

![React](https://img.shields.io/badge/React-v.18-blue)
![Redux toolkit](https://img.shields.io/badge/RTK-v.1-purple)
![TypeScript](https://img.shields.io/badge/TypeScript-v.4-green)
![MUI](https://img.shields.io/badge/MUI-v.5.13.2-blue)

E-Commerce project for Integrify's front-end module. This project is deployed in [vercel](https://fs15-frontend-project-one.vercel.app).

This project uses [Platzi Fake Store API](https://fakeapi.platzi.com/) which allows API users to do create, update, and delete requests for usernames and products, which may lead to broken images or nonsensical names/descriptions.

## Learning outcome

- Learned how to use Redux, why and when we should use it vs useState.
- Deepened my undestanding of Typescript and why it's beneficial.
- Learned more about MUI & enjoyed the ease of use that comes with it.

## Project requirements

> 1. Use the API endpoint [https://fakeapi.platzi.com/](https://fakeapi.platzi.com/) to create an e-commerce website. Read the documentation and learn how to use the different endpoints.
> 2. Create at lease 4 pages (can be more if you want): Home page, product page,
>    profile page (only available if user logins), and cart page (cart could be a page or a modal)
> 3. Create Redux store for following features:
>    - product reducer: get all products, find a single products, sort products by
>      categories, sort products by price. Create, update and delete a product (enable update & delete features only for admin of the webapp. For example, you can check if user is your admin account before let them delete product)
>    - user reducer: Register and Login
>    - cart reducer: add product to cart, remove products, update products's quantity in cart
> 4. When adding routers to your application, programatically set certain routes to be private. For example, route to user profile page should not be accessible if user has not logged in.
> 5. Deploy the application and rewrite README file.

## How to use:

### `npm install`

Install all the dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
