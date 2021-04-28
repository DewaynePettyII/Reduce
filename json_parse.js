//A common use of json is to change data from a webserver. 
//When recieving data from a webserver, the data is alwasy a string. Parse the data with JSON.parse(), and the data -
// - becomes a JavaScript object. 

//Imagine you've recieved this text from a web server:
var str = '{ "name":"John", "age":30, "city":"New York"}'
var obj = JSON.parse(str)
console.log(obj)