# TruSTAR Front-End Coding Exercise

This is the coding exercise we give to all potential front-end team members. It consists of a few parts. Instructions are below.

## Exercise 1

We've created a CodePen with a small exercise. Please follow the link below, fork the CodePen and complete the exercise as per the instructions.

http://codepen.io/isinn/pen/ZWVmvw

## Exercise 2

This exercise involves building a very small JavaScript app that interacts with an API.

### Introduction

We've created a mock API to allow you to do CRUD operations with "Reports". This is vaguely similar to the API we actually use in production. The goal is to create an Inbox for these reports where you can view, create and delete Reports. See the video below for a demo of what the end result should look like.

TODO: Put video here

### Set Up

* Install [Node][] v5 or above and NPM v3 (you can [install it directly][Node] or use [NVM][])
* Fork this repository, clone it onto your computer and run `npm install` to install dependencies
* `npm start` to run the API server at `localhost:3333`
  * Alternatively you can specify the port as follows: `PORT=1234 npm start`
* Build a small app as per the instructions below

[Node]:https://nodejs.org/
[NVM]:https://github.com/creationix/nvm

### Instructions

As mentioned above, the server you should now have running locally presents a small API you can use to create, read, update and delete Report objects from the server. (Feel free to [view the source][server] under the `server/` directory in this repository)

[server]: https://github.com/trustar/front-end-coding-excercise/tree/master/server

**NOTE:** This server does _not_ actually persist any data. For simplicity, all data is stored in memory. So restarting the server will effectively reset all the data you've stored.

The goals of this exercise are as follows:

* Fetch all reports from the server and display them in a list in the browser.
* Sort in chronological order by the `created` property, such that the most recent report is at the top of the list
* When the user clicks a report title display that specific report's body on the right
* Allow the user to create a report using a form and AJAX to submit the report to the API server
* Make sure the reports list is still sorted such that the newly created report shows up at the top
* Allow the user to delete a report by clicking a button
  * Optionally show a confirmation dialogue to make sure the user is certain they want to delete this report
* Create a search box that will allow users to filter reports by their title
* Style the app to look similar to the demo video
* Add loading states for all the async actions a user can perform (fetching reports, creating a report, deleting a report, etc)

All of the bullet points above are optional. Don't feel obligated to complete anything that's taking up an inordinate amount of time. This exercise is not meant to consume your weekend, but do complete as much as you can.

## Wrapping Up

Please respond to the initial email thread with links to your solutions to Exercise 1 and Exercise 2

## Troubleshooting

* `npm start` fails
  Make sure you first ran `npm install` and it completed successfully. Also make sure you are running at least Node v5 and NPM v3.
* Other issues
  Please [open an issue][] and we'll be happy to address it.

[open an issue]: https://github.com/trustar/front-end-coding-excercise/issues/new
