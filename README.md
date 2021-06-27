## CRUD Application in React

An Employee Management application used to keep track of employee details built with React, JavaScript and Bootstrap. For server side, Express.js is used. It uses MySql database. 

The Application requires the admin to log in to perform CRUD operations on the employee data.  

## Project Screen Shot(s)


## Installation and Setup Instructions

Clone this repository. You will need `node` and `npm` installed globally on your machine.  

### Installation:

Open the project folder in your IDE. In the terminal, type the following command: 

`npm install`  

This will install all the required dependencies.

### To Run the Application:  

`npm start`  

The Application runs on **localhost:3000**

## Application Design

The src folder consists of Components folder wherein each component of the Application is placed.

1. **Authentication** User is required to log in in order to acess the Application. The data entered by the user is authenticated with the data in the database and according access to Employee data is provided else it redirects to the login page.

2. **View** This components displays data in a tabular form. The Admin can make request to delete, edit or insert data using the button provided.

3. **Add** This components inserts new data into the Employee table.

4. **Edit** To edit Employee details.

5. **Delete** To delete the selected employee details based on id.

