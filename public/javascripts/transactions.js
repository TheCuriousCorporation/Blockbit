/* This script is still being worked on. I just wanted to get the basic framework down for now. */

$(document).ready(function(){ // Enable jQuery
  $('#search').click(function(){ // This function calls the code through the click function. The API will be called when the button is clicked. 
  	var addr = $('input[name=WalletAddress]').val(); // Assigning the variable 'addr' to whatever value is put in the "input" search box. 

  	$.ajax({
  	  url: 'https://api.chain.com/v1/bitcoin/addresses/' + addr + '/transactions', // API Call URL.
  	  data: {
  	  	limit: 2
  	  },
  	  type: 'GET',
  	  beforeSend: function (xhr) {
  	  	xhr.setRequestHeader ('Authorization', 'Basic '+btoa('05e17b4bd6bf6ecd3df2947c027ce523')); // Authorize the API call
  	  },
  	  success: function(data) {

      /*  for (var i = 0; i < data.length; i++) { // Pay no attention to this mess.
          var output = data[i];
        } */

  	  	var outputOne = data[0]; // Calls the JSON file from Chains API and stores the array in the variable "output".
        var outputTwo = data[1]; 
        var hash = outputOne.hash;
        var inputs = outputOne.inputs[0];
        var outputs = outputOne.outputs[0];
        var valueIn = inputs.value;
        var valueOut = outputs.value;
        var feesOne = outputOne.fees;
        var amountOne = outputOne.amount;
        var feesTwo = outputTwo.fees;
        var amountTwo = outputTwo.amount;

  	  	/* Add more code here... for example this will call all of the JSON code from the API. */
  	  	   $('#output').append(output)
        /* I need to do some research to find the best design to display this data. */
  	  },
  	  error: function(req, msg, err) {
  	  	console.log(err); // If there is a problem, yo, this code won't solve it. But it will tell me it's broken.
  	  }
  	});
  });
});