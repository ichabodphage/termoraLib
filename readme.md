# termoraApi.js documentation
---
## dependancies
node.js v16.7.0 or higher
the HTTP node.js module

---
## usage

### instalation
instalation can be done by either doing
    npm i termoraLib
or cloning the git repository

in your JS file, include the file using require.
    var termora = require("termora.js")
---
## instance variables
- host | provides the hostname for the library to interface with 
  - default value: "api.termora.org"
- port | port the port that HTTP requests will be sent to
  - default value: 433
---
## methods

### setHost(newHost)
#### description
changes the host variable to the parameter newHost.
throws an error if newHost is not a string

#### usage
    termora.setHost("askstentor.com")

### setPort(newPort)
#### description
changes the port variable to the parameter newPort.
throws an error if newPort is not a number

#### usage
    termora.setPort(80)

### async getTerm(id)
#### description
makes a GET request to /term/:id, returns a promise. throws an error if ID is not a number

on resolve : returns an object [as described in the berry api](https://github.com/termora/berry/blob/main/docs/docs/api.md)

on reject : returns an error


#### usage
    await termora.getTerm(1)

### async search(query)
#### description
makes a GET request to /search/:term, returns a  promise throws an error if query is not a string

on resolve : returns an array of term objects

on reject : returns an error


#### usage
    await termora.search("plural")

### async getList(id)
#### description
makes a GET request to /list if id is undefined
if id is a number the request is sent to /list/:id instead

on resolve : returns an array of all terms in acordance to the term id, returns all terms if id is not presence

on reject : returns an error


#### usage
    await termora.getList()

    await termora.getList(1)

### async getExplinations()
#### description
makes a GET request to /explinations

on resolve : returns an array of explinations

on reject : returns an error


#### usage
    await termora.getExplinations()

### async getCatagories()
#### description
makes a GET request to /categories

on resolve : returns an array of categories

on reject : returns an error


#### usage
    await termora.getCatagories()
