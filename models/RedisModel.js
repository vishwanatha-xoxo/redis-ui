
var redis = require('redis');
var client = redis.createClient();

client.on('connect', function() {
    console.log('connected');
});

 module.exports.list = async (data) => {

	//let keus =  client.get('*');

	//client.set('framework', 'AngularJS');

	var jobs = [];

	let	keys_searcha = await keys_list(data);

		jobs = await filterdata(keys_searcha);

	let first_element = await getByKey(jobs[0]);

 	return {keys:jobs,first_key:jobs[0],first_value:first_element};


 }

  module.exports.add = async (data) => {

	client.set(data['key'],data['value']);

 	return {success:1,status:200,message:"success"};

 }

 module.exports.show = async (data) => {

 	let key_value = await getByKey(data['key']);

 	return {success:1,status:200,data:key_value};

 }

 module.exports.delete = async (data) => {

 	client.del(data['key'], function(err, reply) {
	});

 	return {success:1,status:200,message:"deleted"};

 }

 filterdata = async(keys) => {

 	let newList = [];

 	for(let i=0;i<keys.length;i++){

 		let key = keys[i];

 		if(!key.includes(':')){
 			newList.push(keys[i]);
 		}

 	}

 	return newList;
 }

 keys_list = async function(data) {
  return new Promise(async function(resolve,reject){


    client.keys('*', function(err, reply) {
	   // console.log(reply);
	    resolve(reply);
	});

  })
}

getByKey = async function(key) {
  return new Promise(async function(resolve,reject){


    client.get(key, function(err, reply) {
	   // console.log(reply);
	    resolve(reply);
	});

  })
}