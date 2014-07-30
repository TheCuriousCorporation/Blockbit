$(document).ready(function(){ // Enable jQuery.
	$('#search').click(function(){ // Enable the "click" function. Once the Button is clicked, the API is called.
		var addr = $('input[name=WalletAddress]').val(); // Assigning the variable "addr" to whatever address value is put in the input box.
		var symbol = "/images/Symbol.jpg"; // Bitcoin Logo Variation.
		$.ajax({
			url: 'https://api.chain.com/v1/bitcoin/addresses/' + addr, // Chain API URL.
			type: 'GET',
			beforeSend: function(xhr) {
				xhr.setRequestHeader ('Authorization', 'Basic '+btoa('05e17b4bd6bf6ecd3df2947c027ce523')); // Authorizing the API call.
			},
			success: function(data) { // If the API call is successfull, it assigns the JSON to this function.
				var BTChash = data.hash;
        		var BTCBalance = data.balance / 100000000.0;
        		var BTCSent = data.sent / 100000000.0;
        		var BTCReceived = data.received / 100000000.0;

        		$("#firstline").append("<h3>There is: </h3>");
        		$('#break').append("<br />");
        		$('#balance').append("<h3>A balance of " + BTCBalance + ".</h3>");
        		$('#sent').append("<h3>There were " + BTCSent + " coins sent and " + BTCReceived + " coins received.</h3>");
        		$('#hashdata').append("<h3>The address is " + BTChash);
        		$('#pic').append("<img src='/images/CircleBitcoin.png' />");
			},
			error: function(req, msg, err) {
				console.log(err); // If it's broke, you had better fix it.
			}
		});
	});
});