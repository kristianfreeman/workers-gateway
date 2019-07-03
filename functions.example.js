/*
 * Defining a mapping between an incoming path and a corresponding Lambda function:
 *
 * The key is the request path:
 *
 * '/': {
 *   // name is either a shortname (`myFn`) or a full-length ARN (preferred)
 *   name: 'arn:aws:lambda:us-east-1:123456789012:function:myFn',
 *
 *   // OPTIONAL: Any requestHeaders will be passed to Lambda
 *   requestHeaders: { 'Content-Type': 'application/json' },
 *
 *   // OPTIONAL: Any responseHeaders will be returned to the client
 *   responseHeaders: { 'Content-Type': 'application/json' },
 *
 *   // Specify the HTTP method passed to Lambda
 *   method: 'GET',
 * }
 *
 * Add each key/value pair to the default export for this file.
 *
 */

module.exports = {}
