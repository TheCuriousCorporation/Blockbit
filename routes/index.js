
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
  	title: 'Blockbit',
  	find: 'Find the amount of any Bitcoin on the Blockchain!',
  	powered: 'Chain.com',
  	made: 'cponeill',
  	version: 'Current Version: 0.1',
  	link: 'Transactions'
  });
};