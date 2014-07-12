
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
  	title: 'Bitcoin Address',
  	find: 'Find the amount of any Bitcoin on the Blockchain!'
  });
};