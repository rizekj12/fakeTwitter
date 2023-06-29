# Welcome to FakeTwitter!

a fake twitter designed for practicing full stack development and DevOps

![FakeTwitter Screenshot](./fake-twitter/src/assets/app-demo.gif)

## Description

This is a full stack application that is designed to mimic the functionality of twitter. It is built with a React frontend and an AWS backend. The frontend is built with React and uses the AWS Amplify library to connect to the backend. ~~The backend is built with a serverless framework and uses AWS Lambda, AWS API Gateway, and AWS DynamoDB. The frontend is hosted on AWS S3 and the backend is hosted on AWS Lambda.~~

We also use DevOps to create a CI/CD pipeline that builds and deploys the code to a development environment and a production environment. The CI/CD pipeline is built with Jenkins and is hosted on a Docker container. ~~The development environment is hosted on AWS EC2 and the production environment is hosted on AWS ECS.~~

## Our Team

**Joshua Rizek**<br/>
_Software Engineer Senior Consultant at Booz Allen Hamilton_<br/>
[LinkedIn](https://www.linkedin.com/in/joshua-rizek-1a6a28199/) |
[Github](https://github.com/rizekj12)
[Portfolio](https://joshuarizek.netlify.app/)
<br/>

**Duncan Wood**<br/>
_Software Engineer open to work_<br/>
[LinkedIn](https://www.linkedin.com/in/duncanwoodpro/) |
[Github](https://github.com/Duncan-Wood)
[Portfolio](https://duncanwoodpro.netlify.app/)

### Features

- Users can create an account and login with authentication
- Users can follow other users
- Users can view a feed of posts
- Users can create posts
- Users can like and comment on posts
- Users can delete their own posts

## Technologies Used

The following technologies were used in the development of Fake Twitter:

#### Frontend

- JavaScript, HTML, CSS
- React
- AWS Amplify
- Material UI
- React Router
- ~~AWS S3~~

#### Backend

- Docker
- Relational Database with ~~PostgreSQL~~
- Amazon RDS
- ~~AWS Lambda~~
- ~~AWS API Gateway~~

## MVP

- Authentication login
- signup page
- have accounts that can follow other user accounts
- main page with feed of tweets from other users
- be able to create a post
- users can like and comment on post
- pagination

## DevOps MVP

- create three servers: one for Jenkins, one for development environment, one for production environment
- create simple CICD pipeline that builds and deploys code to dev and prod environment everytime there is a push to the source code
- CICD pipeline will be done with Jenkins on a Docker container

### Stretch Goals

- Users can view their own profile
- Users can view other users profiles
- Users can view a feed of posts from users they follow
- Users can view a feed of posts from a specific user

### components needed

- post component
- nav bar
- create post component
- friends list component

## pages needed

- login page
- sign up page
- homepage for user
- other users pages
- friends list page

## Contribution Guidelines

We welcome contributions to our app! If you would like to contribute, please contact any member of our team using the links above for inquiries, to report bugs, or to propose improvements.
