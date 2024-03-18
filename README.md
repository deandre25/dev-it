# Client-Server Data Fetch Logic
This project implements client-server data fetch logic according to the provided specifications.

## Overview
The project consists of a client-side application and a server-side application.

## Client-Side Application
The client-side application is responsible for rendering the user interface, handling user interactions, and making asynchronous HTTP requests to the server's API endpoint.

Technologies Used:
* HTML
* CSS
* JavaScript (ES6+)


Functionality:
* Displays an input field and a "Start" button.
* Disables the "Start" button upon clicking and starts sending asynchronous HTTP requests to the server's API endpoint.
* Utilizes the input value as a concurrency limit and requests limit per second.
* Renders the server response indexes to a list immediately after each response.
## Server-Side Application
The server-side application handles incoming HTTP requests from the client and provides appropriate responses.

### Technologies Used:
* Node.js
* Express.js


Functionality:
Handles requests to the "/api" endpoint.
Generates a random delay before sending a response (1ms to 1000ms).
Returns a successful response with the request index.
Returns a 429 error response if more than 50 requests are received per second.
