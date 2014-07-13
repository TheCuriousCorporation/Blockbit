
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
  	title: 'Bitblock',
  	find: 'Find the amount of any Bitcoin on the Blockchain!'
  });
};