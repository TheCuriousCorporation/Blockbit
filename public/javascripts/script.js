$(document).ready(function(){
	$('#search').click(function(){
		var addr = $('input[name=WalletAddress]').val();
		var symbol = "/images/Symbol.jpg";
		$.ajax({
			url: 'https://api.chain.com/v1/bitcoin/addresses/' + addr,
			type: 'GET',
			beforeSend: function(xhr) {
				xhr.setRequestHeader ('Authorization', 'Basic '+btoa('05e17b4bd6bf6ecd3df2947c027ce523'));
			},
			success: function(data) {
				var BTChash = data.hash;
        		var BTCBalance = data.balance / 100000000.0;
        		var BTCSent = data.sent / 100000000.0;
        		var BTCReceived = data.received / 100000000.0;

        		$("#firstline").append("<h3>There is: </h3>");
        		$('#break').append("<br />");
        		$('#balance').append("<h3>A balance of " + BTCBalance + ".</h3>");
        		$('#sent').append("<h3>There were " + BTCSent + " coins sent and " + BTCReceived + " coins received.</h3>");
        		$('#hashdata').append("<h3>The hash is " + BTChash);
        		$('#pic').append("<img src='/images/CircleBitcoin.png' />");
			},
			error: function(req, msg, err) {
				console.log(err);
			}
		});
		return false;
	});
});