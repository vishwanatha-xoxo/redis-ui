"use strict"
var env = 'localhost';
module.exports = function(){
     return {
        environment : env,
        redis: {
            "host": "127.0.0.1",
            "user": "",
            "port": 6379,
            "dbname" : 0
        },
	   port:2000
     }
}();
