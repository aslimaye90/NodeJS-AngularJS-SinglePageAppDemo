var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/*GET partials*/
router.get('/partials/:id', function(req,res){
	if(req.params.id==1)
		res.render('partials/p1');
	else if(req.params.id==2)
		res.render('partials/p2');
	else
		res.render('partials/default')
});

module.exports = router;
