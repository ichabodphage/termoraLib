const https = require('https')

module.exports = {
  //default host and port
  host : "api.termora.org",
  port :  443,
  setHost : function(newHost){
    if(!newHost){throw "newHost cannot be undefined"}
    if(typeof(newHost) !== 'string'){
      throw "host must be string"
    }
    this.host = newHost
  },
  setPort : function(newPort){
    if(!newPort){throw "newPort cannot be undefined"}
    if(typeof(newHost) !== 'number'){
      throw "port must be number"
    }
    this.port = newPort
  },
  getTerm : function(id){
    if(!id){throw "id cannot be undefined"}
    if(typeof(id) !== 'number'){throw "id must be number"}
    return new Promise((resolve,reject)=>{
      var req = new https.request({
        host: this.host,
        port: this.port,
        path: "/v1/term/"+id
      })
      
      req.on('response',(res)=>{
        var output = ""
        res.on('data',(data)=>{ output += data})
        res.on('end',()=>{resolve(JSON.parse(output))})
        })
      req.on('error',(e)=>{reject(e)})
      req.end()
    })
  },
  search : function(query){
    if(!query){throw "query cannot be undefined"}
    if(typeof(query) !== 'string'){throw "query must be string"}
    return new Promise((resolve,reject)=>{
      var req = new https.request({
        host: this.host,
        port: this.port,
        path: "/v1/search/"+query
      })
      
      req.on('response',(res)=>{
        var output = ""
        res.on('data',(data)=>{ output += data})
        res.on('end',()=>{resolve(JSON.parse(output))})
        })
      req.on('error',(e)=>{reject(e)})
      req.end()
    })
  },
  getList : function(id){
    var path = ""
    if(id){ path = "/"+id}
    return new Promise((resolve,reject)=>{
      var req = new https.request({
        host: this.host,
        port: this.port,
        path: "/v1/list"+path
      })
      
      req.on('response',(res)=>{
        res.on('data',(data)=>{resolve(JSON.parse(data))})
        })
      req.on('error',(e)=>{reject(e)})
      req.end()
    })
  },
  getExplinations : function(){
    return new Promise((resolve,reject)=>{
      var req = new https.request({
        host: this.host,
        port: this.port,
        path: "/v1/explinations"
      })
      
      req.on('response',(res)=>{
        res.on('data',(data)=>{resolve(JSON.parse(data))})
        })
      req.on('error',(e)=>{reject(e)})
      req.end()
    })
  },
  getCatagories : function(){
    return new Promise((resolve,reject)=>{
      var req = new https.request({
        host: this.host,
        port: this.port,
        path: "/v1/categories"
      })
      
      req.on('response',(res)=>{
        res.on('data',(data)=>{resolve(JSON.parse(data))})
        })
      req.on('error',(e)=>{reject(e)})
      req.end()
    })
  }
}


