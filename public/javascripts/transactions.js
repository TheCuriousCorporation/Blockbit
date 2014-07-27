$(document).ready(function(){
  $('transactions').click(function(){
  	var addr = $('input[name=WalletAddress]').val();
  	var symbol = "/images/Symbol.jpg";
  	ajax:({
  	  url: "https://api.chain.com/v1/bitcoin/addresses/" + addr + "/transactions";
  	  type: "GET",
  	  beforeSend: function(xhr){
  	  	xhr.setRequestHeader('Authorizations', 'Basic ',btoa('05e17b4bd6bf6ecd3df2947c027ce523'));
  	  },
  	  success: function(data) {
  	  	var time = data[0].blocktime;

  	  	$('#time').append("<h3>The Block Time: " + time + ".</h3>");
  	  },
  	  error: function(req, msg, err) {
  	  	console.log(err);
  	  }
  	});
  	return false;
  });
});