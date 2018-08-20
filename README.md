# Cohire Coding Challenge (JavaScript)

### Introduction 
Welcome! This coding challenge is designed to explore your javascript skills. You will have to complete a function that validates an object array against a ruleset. 

### The challenge
The developers at virtualCompany LLC have written some rules in JSON format that define valid request paths, query parameters, body parameters and request methods for an API service. As 3 different developers worked on the rules, the rules were uploaded to 3 different URLS: 
- https://by56lc60o1.execute-api.eu-west-1.amazonaws.com/dev/rule1
- https://by56lc60o1.execute-api.eu-west-1.amazonaws.com/dev/rule2
- https://by56lc60o1.execute-api.eu-west-1.amazonaws.com/dev/rule3

The developers would like you to complete the validation function in order to validate all the mock requests in the `requestsArray` array against the rules that they have written. There are a total of 8 request objects in said array with the following properties: 
- `originalUrl` which maps to the `path` property in the rules
- `query` which maps to the query parameters
- `body` which maps to the body parameters
- `method` which maps to the request method. 

The validation will need to check for the following:

1. All required parameters are present
2. All parameter data types are correct
3. No extraneous parameters are present

Also, sometimes the developers are lazy and the swagger spec does not cover all the APIs. In that case, the middleware should just allow the API request to proceed.

The skeleton code and `requestArray` for this challenge can be found in the `index.js` file. 

### Environment
The submitted code should work in latest version of Chrome and Firefox.

### Submission guide
Please fork this repo and drop your contact person a note once you are done.

### How we review
- **Code quality**: Is the code easy to understand and maintain? Is the coding style consistent with JavaScript best practices? Do you demonstrate a good grasp of JavaScript, especially ES6?
- **Performance**: What is the function's time and memory complexity?
