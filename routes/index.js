
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
  	title: 'Blockbit',
  	find: 'The easiest way to find the amount of any Bitcoin on the Blockchain!'
  });
};