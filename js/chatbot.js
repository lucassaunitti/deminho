$(document).ready(function() {

  var request = {"content": "SantoDigital 2017"};
  $.ajax({
    url: "http://backend.chatbot-sd.appspot.com/_ah/api/sd/v1/chatbot",
    type: 'POST',
    dataType: "json",
    data: JSON.stringify(request),
    beforeSend: function(xhr) {
      xhr.setRequestHeader('Content-Type', 'application/json');
    },
    success: function(response) {
      console.log(response);
    },
    error: function(e) {
      console.log("Problems requesing  API");
      console.error(e);
    }
  });

});
