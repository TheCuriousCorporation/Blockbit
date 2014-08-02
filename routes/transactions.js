
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.render("transactions.ejs", {
  	title: 'Blockbit',
  	find: 'Find the amount of any Bitcoin on the Blockchain!',
  	powered: "Chain.com",
  	made: 'cponeill',
  	version: 'Current Version: 0.1',
  	link: 'Home'
  });
};