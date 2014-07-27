
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
  	title: 'Blockbit',
  	find: 'Discover the amount of any Bitcoin on the Blockchain!'
  });
};