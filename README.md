# TruSTAR Front-End Coding Exercise

This is the coding exercise we give to all potential front-end team members. It consists of a few parts. Instructions are below.

## Exercise 1

We've created a CodePen with a small exercise. Please follow the link below, fork the CodePen and complete the exercise. The instructions are in the code at this link:

http://codepen.io/isinn/pen/ZWVmvw

## Exercise 2

This exercise involves building a very small JavaScript app that interacts with an API.

### Introduction

We've created a mock API to allow you to do CRUD operations with "Reports". This is vaguely similar to the API we actually use in production. The goal is to create an Inbox for these reports where you can view, create and delete Reports. See the video below for a demo of what the end result should look like.

<a href='https://content.jwplatform.com/players/hcObtPsW-yJBou2M5.html' target='_blank'>Demo Video</a>
(It might be low res by default, but you can manually bump the resolution to make it more visible)

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
* Create a search box that will allow users to filter reports by their title
* (Optional) Style the app to look similar to the demo video

An example request/response cycle to the API server might look like this:

**Request:**

```
GET /reports HTTP/1.1
Accept: */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Host: localhost:3333
```

**Response:**

```
HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
Connection: keep-alive
Content-Length: 7876
Content-Type: application/json; charset=utf-8
Date: Fri, 06 May 2016 01:17:43 GMT
X-Powered-By: Express
```

**Response Body:**

```json
[
    {
        "body": "Quo eius et laboriosam et deleniti. Quis vel qui illo maiores modi. Molestiae blanditiis quo quia ipsa officia deleniti. Enim modi ratione porro dolorem eum.\n \rRatione iste placeat perspiciatis. Laudantium magni ea ullam quae culpa. Quidem unde maiores reiciendis rerum provident sed. Voluptatibus saepe ullam debitis iure. Ex tempora laboriosam quo in. Aut maiores commodi quos omnis tempora.\n \rIpsam laborum modi sint eos culpa tempora. Rerum velit illo tempora eaque recusandae. Magnam architecto nulla vel harum vel perferendis animi.",
        "created": "2015-09-25T19:49:26.782Z",
        "id": "7e8a59b1-b758-4b30-8179-c62f0931e5ce",
        "title": "Est inventore iusto inventore repudiandae amet fugit eaque minus.",
        "updated": "2015-09-25T19:49:26.782Z"
    },
    {
        "body": "Asperiores fuga incidunt recusandae sunt aut deleniti omnis qui eveniet. Unde voluptatum animi repudiandae excepturi consequatur iste asperiores. Id est laborum eveniet velit nemo adipisci.\n \rEaque illum pariatur vel nam cum voluptatum vel laboriosam. Ipsam at ut commodi blanditiis doloremque quia ut et. Repudiandae velit magnam ad ratione quo molestiae tempore. Consectetur perspiciatis eaque. Sit quidem pariatur similique cumque.\n \rRepellat impedit rerum quia ipsam excepturi dolore autem alias asperiores. Quae sint et consequatur et. Quasi omnis corporis laboriosam beatae et rerum deserunt et.",
        "created": "2015-07-01T11:24:17.098Z",
        "id": "ac2f8cdc-8041-4cce-9d33-7be2fef9e039",
        "title": "Dignissimos laboriosam rerum accusantium.",
        "updated": "2015-07-01T11:24:17.098Z"
    }
]
```

See below for the API documentation.

### API Documentation

#### `GET /reports`

* **Request Body:** N/A
* **Response Body:** Array

Fetch all Reports. There should be 10 pre-populated reports on the server.

## Wrapping Up

Please respond to the initial email thread with links to your solutions to Exercise 1 and Exercise 2

## Troubleshooting

* `npm start` fails
  Make sure you first ran `npm install` and it completed successfully. Also make sure you are running at least Node v5 and NPM v3.
* Other issues
  Please [open an issue][] and we'll be happy to address it.

[open an issue]: https://github.com/trustar/front-end-coding-excercise/issues/new

## Questions

Please [open an issue][] or email us at the same email we contacted you with.
