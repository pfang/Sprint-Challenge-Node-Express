# Review Questions

## What is Node.js?
Node.js is a JavaScript run-time environment that executes JS code on the server-side.

## What is Express?
Express is the most popular Node web framework used to design web applications and APIs.

## Mention two parts of Express that you learned about this week.
Express allows you to write handlers for requests and add middleware.

## What is Middleware?
Middleware are functions that have access to the request object, the response object, and the next function in an application's request-response cycle.

## What is a Resource?
A resource is anything that you send to the client through HTTP requests.

## What can the API return to help clients know if a request was successful?
APIs can return various status codes based on if a request went through: 
200-299 = Successful
300-399 = Redirect
400-499 = Errors on client-side
500-599 = Errors on server-side

## How can we partition our application into sub-applications?
By using Express routers.

## What is CORS and why do we need it?
Cross-Origin Resource Sharing. It's a mechanism that uses additional HTTP headers to let a user agent gain permission to access resources from a server on a different domain than the site currently in use. It basically allows us to use data and resources from different servers.
