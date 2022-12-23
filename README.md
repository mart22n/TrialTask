# A Vanilla NodeJS Implementation ff a Simple RESTful MVC Server
The server caches the last calculation results, and implements basic HTTP URI discovery by returning available paths in response to HTTP OPTIONS request.

## Usage
Send a HTTP OPTIONS request to retrieve available GET request paths.

For using the GET endpoint, send a HTTP request to localhost:3000 with query ?fact=<number>, 
e.g: http://localhost:3000/?fact=3

For using the POST endpoint, send a HTTP request to localhost:3000 with the JSON in the body, 
e.g: http://localhost:3000 
  
and JSON: 
{
"start": 1,
"length": 7
}
