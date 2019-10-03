var express = require('express');

var router = express.Router();

// Require controller modules.
var redis_controller = require('../controllers/redisController');

router.get('/', redis_controller.index);
//to do tasks list
router.get('/redis/list', redis_controller.list);

router.post('/redis/add', redis_controller.add);

router.get('/redis/show', redis_controller.show);

router.get('/redis/delete', redis_controller.delete);

module.exports = router ;