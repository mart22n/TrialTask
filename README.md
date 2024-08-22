# A Vanilla NodeJS Implementation of a Simple RESTful MVC Server
The server calculates the factorial or Fibonacci sequence from the given input, caches the last calculation results, and implements basic HTTP URI discovery by returning available GET request paths in response to HTTP OPTIONS request.

## Usage
Send a HTTP OPTIONS request to retrieve available GET request paths.

For using the GET endpoint for factorial, send a HTTP request to localhost:3000 with query ?fact=<number>, 
e.g: http://localhost:3000/?fact=3

For using the POST endpoint for Fibonacci, send a HTTP request to localhost:3000 with the JSON in the body, 
e.g: http://localhost:3000 
  
and JSON: 
{
"start": 1,
"length": 7
}
