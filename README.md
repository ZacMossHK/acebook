# Acebook

**Acebook is a full stack MCV social media web application. It was developed as a group project at Makers Academy.**

## About

Users can:

- Create a profile and add a profile picture
- Add other users to their friends list
- Make a text post
- See their friends' posts
- Comment on posts
- Like posts and comments
- Delete their own posts and comments

## Tech

Acebook uses the following tech stack:

- [Express](https://expressjs.com/) web framework for Node.js.
- [Nodemon](https://nodemon.io/) to reload the server automatically.
- [Handlebars](https://handlebarsjs.com/) to render view templates.
- MongoDB database system.
- [Mongoose](https://mongoosejs.com) to model objects in MongoDB.
- [ESLint](https://eslint.org) for linting.
- [Jest](https://jestjs.io/) for testing.
- [Cypress](https://www.cypress.io/) for end-to-end testing.

## Setup

To install:
```
npm install
```
To install MongoDB:
```
brew tap mongodb/brew
brew install mongodb-community@5.0
```
*Note:* If you see a message that says `If you need to have mongodb-community@5.0 first in your PATH, run:`, follow the instruction. Restart your terminal after this.
To start MongoDB:
```
brew services start mongodb-community@5.0
```
To run all tests:
```
npm test
```

### Start

Start the server
```
npm start
```
Browse to [http://localhost:3000](http://localhost:3000)

#### Start test server

The server must be running locally with test configuration for the
integration tests to pass.

```
npm run start:test
```

This starts the server on port `3030` and uses the `acebook_test` MongoDB database, so that integration tests do not interact with the development server.

## Design

As our project grew in scale, our group's codebase and routes became more complicated. We decided to use Excalidraw with its live collaboration feature to map this out as we could make easy to understand sketches that could be altered by group members when they were updating new routes and features.
![AcebookExcalidrawCodebaseFlow](https://user-images.githubusercontent.com/63399205/199772237-5a6cecd2-5dbd-4f5e-88ba-66cb4f53e36a.png)

We also used Excalidraw to design the page layout.
![AcebookLayout](https://user-images.githubusercontent.com/63399205/199794471-8221b06e-8bd5-47f3-b940-f4784f0b895c.png)

Our group would have regular two-day sprints, generating tickets at the start of each sprint that we would track in Trello. Group members be assigned tickets to complete and could then choose remaining tickets from the To Do list to work on. Completed tickets would be moved to In Review list when a pull request was made for that ticket's branch to the group's Github repo. After another pair had reviewed and merged that branch the ticket would be moved to the Done list.
<img width="1440" src="https://user-images.githubusercontent.com/63399205/199795516-225da5b9-32cd-4c07-9b3f-0b4514157f3c.png">
