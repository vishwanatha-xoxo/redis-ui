var redis = require(__dirname + '/../models/RedisModel.js'); // award model import

exports.index = async (req, res) => {

    let result = await redis.list(req.query);

    res.render('index.html',result);


};

exports.list = async (req, res) => {

    let result = await redis.list(req.query);

    res.send(result);


};

exports.add = async (req, res) => {

    let result = await redis.add(req.body);

    res.send(result);

};

exports.show = async (req, res) => {

    let result = await redis.show(req.query);

    res.send(result);


};

exports.delete = async (req, res) => {

    let result = await redis.delete(req.query);

    res.send(result);


};