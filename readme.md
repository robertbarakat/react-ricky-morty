# React Ricky & Morton

## Project Background
Using the Rick & Morty [API](https://rickandmortyapi.com/) display the proﬁles of the characters.
The proﬁle of a character should include:
* Image
* Character information (name, species, etc).
* Origin and location information (name, dimension, amount of residents, etc).
* Name of the chapters the character is featured on.

## Commands
* **yarn dev**: launches the application in development mode
* **yarn build**: creates the application's build folder

## Bundler
* **Vite**

## Packages
* **React 18**
* **Typescript**
* **React Router Dom v6** for routing
* **Axios** Http Client 
* **Jotai** for State Management
* **Font Awesome** for Icons

## Folder Structure
* **API** contains the Axios Interceptors as well as API services
* **Components** contains React components used for view purposes only
* **Pages** contains React components that correspond to a route
* **Routing** contains the project's routes   
* **Shared** contains images, global styles, data models, constants and utils
* **Store** for Jotai State Management

## Differences between Vite and Create-React-App 

| VITE              | CRA                   |
| ----------------- | --------------------- |
| VITE_BASE_URL     | REACT_APP_BASE_URL    |
| import.meta.env   | process.env           |
| main.tsx          | index.tsx             |
| yarn dev          | yarn start            |
