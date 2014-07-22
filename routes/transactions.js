
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.render("transactions.ejs", {
  	title: 'Blockbit',
  	field: 'Find any transactions on the Blockchain'
  });
};