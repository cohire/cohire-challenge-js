validateRequests(requestArray);

/**
 * there are three parts to this function
 * 1. pull and parse the ruleset (JSON)
 * 2. validate all the objects in the requestArray array against the rulesets in #1
 */
function validateRequests(requests) {
  /**
   * write a new function that pulls and parses all the rules from: 
   * https://by56lc60o1.execute-api.eu-west-1.amazonaws.com/dev/rule1
   * https://by56lc60o1.execute-api.eu-west-1.amazonaws.com/dev/rule2
   * https://by56lc60o1.execute-api.eu-west-1.amazonaws.com/dev/rule3
   */
  // function goes here

  /**
   * subsequently validate each request against the rules you just generated
   */
  for (const request of requests) {
    validateIndividualRequest(request);
  }
}


/**
 * update the code in this function against the ruleset tha you have generated
 * Reminder: 
 * 1. All required parameters are present
 * 2. All parameter data types are correct
 * 3. No extraneous parameters are present
 * @param {object} request 
 */
function validateIndividualRequest(request) {

}

const requestArray = [
  // should pass
  {
    originalUrl: '/api/account/role',
    body: {},
    query: {},
    method: 'GET' 
  },

  // should pass
  {
    originalUrl: '/api/account/role-special',
    body: {},
    query: { key1: 'value1' },
    method: 'GET' 
  },
  // should fail
  {
    originalUrl: '/api/account/role',
    body: {},
    query: { key1: 'value1' },
    method: 'GET' 
  },

  // should pass
  { 
    originaUrl: '/api/account/profile',
    body:
    { name: 'tom w',
      job_title: '1234',
      photo_url: 'https://google.com' },
    query: {},
    method: 'PUT' 
  },

  // should fail
  { 
    originaUrl: '/api/account/profile',
    body:
    { name: 'tom w',
      job_title: 1234,
      photo_url: 'https://google.com' },
    query: {},
    method: 'PUT' 
  },

  // should pass
  { 
    originaUrl: '/api/account/search',
    body: {},
    query: { sort_by: 'ascending', page: '123', location: [ 'uk', 'fr' ] },
    method: 'GET'
  },

  // should pass
  {
    originaUrl: '/api/account/member',
    body: { name: 'tom w', email: '123@gmail.com'},
    query: {},
    method: 'POST'  
  },

  // should fail
  {
    originaUrl: '/api/account/member',
    body: { name: 'tom w' },
    query: {},
    method: 'POST'  
  }
]