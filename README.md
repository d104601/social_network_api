# Social Network API
## Description
A back-end application using NoSQL database for a social network application. I used MongoDB as database because it guarantees speed with large amounts of data and flexibility with unstructured data. This application is built using Mongoose and Express.

## Installation 
Download all files in the repository. This application requires "MongoDB", "Node.js", and packages from npm. To install required package, please enter following command in same directory:
```
npm install
```

## Usage
Type following in command line in the same directory to run the application:
```
npm start
```

## Demonstration
Starting server application
![sample](https://github.com/d104601/social_network_api/blob/main/demo/startDemo.gif)

GET request to show all users, a single user, all thoughts, and a single thought
![sample](https://github.com/d104601/social_network_api/blob/main/demo/getDemo.gif)

POST request to add a new user and then add a thought from new user
![sample](https://github.com/d104601/social_network_api/blob/main/demo/postDemo.gif)

PUT request to update user and thought
![sample](https://github.com/d104601/social_network_api/blob/main/demo/putDemo.gif)

Adding and removing friend to a user
![sample](https://github.com/d104601/social_network_api/blob/main/demo/friendDemo.gif)

Adding and removing reaction to a thought

DELETE request to delete a user and thought
