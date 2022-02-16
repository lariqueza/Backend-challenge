# cord Backend Challenge

### Introduction 
Welcome! This coding challenge is designed to explore your backend skills. You will be writing an Express middleware function.

### The challenge
The developers at ASD corporation have built a new API. However the developers have forgotten to implement any request validation. 

The developers would like you to write a middleware function that checks all incoming requests against a set of predefined rules to ensure that the appropriate parameters have been supplied. The developers would prefer if you avoid installing additional packages, unless it is absolutely necessary. 

You will need to write some code to: 
1. Read the JSON file - `rules.json`
2. Improve the middleware function `checkAgainstRules` to check against the rules from step 1
3. (optional) Add some basic unit testing (1 positive and 1 negative case)

Ideally, the middleware will need to check for the following:
1. All required parameters are present
2. All parameter data types are correct (hint: type casting?)
3. No extraneous parameters are present

Also, there is a chance that the rules do not cover all the existing routes. In that case, the middleware should just allow the API request to proceed. 

### Setup Guide
1. Clone this repo
2. `npm i` to install dependencies. Node v12^ preferable
3. The routes to be protected are found under `/api/account/index.js`

### Submission guide
Please upload the code to a private repo, invite david@cord.co and drop your contact person a note once you are done :) All the best!

### How we review
- **Code quality**: Is the code easy to understand and maintain? Is the coding style consistent with nodejs best practices? Do you demonstrate a good grasp of JavaScript, especially ES6?
- **Performance**: What is the middleware's time and memory complexity?

### Bonus points
- **Automated Tests** - Are there any automated tests?
- **Production-readiness** - Is there proper error handling? Is the code ready to to put into production?

### References
[Express](https://expressjs.com/en/4x/api.html)