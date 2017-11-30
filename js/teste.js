var request = null;
var currentField = -1;

/*******************************************************************************
 * Prepare message to API
 *******************************************************************************/
function sendMessage(optionClicked) {
  $("#buttons-area").fadeOut(0);
  if(request == null) {
    request = {"level": 0};
    reqApi();
    return;
  }

  if(request.state == "S_CLICK") {
    if(optionClicked == null) {
      printBotMessage("Hey! I was waiting for a click", request.options);
      return;
    }

    request.optSel = optionClicked;
    reqApi();
    return;
  }

  var answer = $("#ip-message").val();
  if(answer == null || answer == ""){
    printBotMessage("(-.-) Say something", request.options);
    return;
  }

  $(".text-input").fadeIn(0);
  if(request.state == "S_TYPE_INT") {
    printUserMessage(answer);
    request.content = answer;
    reqApi();
    return;
  }
  console.log("STATE not found");
}

function onOptionClicked(message, optId) {
  printUserMessage(message.textContent);
  sendMessage(optId);
}

/*******************************************************************************
 * Request API
 *******************************************************************************/
function reqApi() {
  console.log("reqApi");
  delete request.answer;
  delete request.options;
  
  console.log("User:");
  console.log(request);
  
  newpostReq(request);
  /*
  $.post({
    url: "http://backend-dot-chatbot-sd.appspot.com/_ah/api/sd/v1/chatbot",
    type: 'POST',
    dataType: "json",
    data: JSON.stringify(request),
    beforeSend: function(xhr) {
      xhr.setRequestHeader('Content-Type', 'application/json');
    },
    success: function(response) {
      request = response;
      
      console.log("Bot:");
      console.log(response);
      
      if (response.level == 1) {
        $('#chat').css("display", "block");
      }

      $("#buttons-area").fadeOut(0);
      girarScroll();
      configuraCampo(response.state);
      printBotMessage(response.answer, response.options);
    },
    /*
    error: function(e) {
      console.log("Problems requesing  API");
      console.error(e);
    }
    */
    /*
    error: function (jqXHR, textStatus, errorThrown) {
            alert('Internal error: ' + jqXHR.status);
    }
  });
  */
}

/*******************************************************************************
 * Build HTML
 *******************************************************************************/
function buildButtons(options) {
  if (options == null) {
      $("#ip-message").focus();
      $("#buttons-area").fadeOut(0);
  }else{
    $('#buttons-area').html('');
    for (var i = 0, option; option = options[i]; i++) {
      $('#buttons-area').append('<div class="option button" ' +
        'onclick="onOptionClicked(this, \'' + option.optId + '\')">' +
        option.text + '</div>');
    }
    $("#buttons-area").fadeIn(0);
  }
  girarScroll();   
}

function printUserMessage(message) {
  var html = '<div class="message-me">';
  html += '<div class="user-txt">' + message + '</div></div>';
  //html += '<div class="user-indicator"></div>';
  $('#chat-history').append(html);
  $("#ip-message").val("");
  girarScroll();
}

function printBotMessage(message, options) {
  var html = '<div class="message-bot">';
  html += '<img class="icon-santito" src="../img/santito.png">';
  html += '<div class="bot-txt">' + message + '</div></div>';
  $('#chat-history').append(html);
  $("#ip-message").val("");

  buildButtons(options);
}

  $(function() {        
    $("#chat-bot").fadeOut(0);

    $("#imagem").click(function(){  
      AbreChat();
    });
    
    $("#close").click(function(){
      fechaChat();
    });
  });
  
  function AbreChat(){
      var botao = document.getElementById("btnFlutuante").style;

      $("#imagem").fadeOut(0);
      $("#chat-bot").fadeIn(100);

      sendMessage();
     
      if (screen.width > 500){
        botao.width = "350px";
        botao.height = "550px";
      }else{
        botao.width = "100%";
        botao.height = "100%";  
        botao.bottom = "0";
        botao.right = "0";  
      }
      botao.borderRadius = "20px"; 
  }
  
  function fechaChat(){
      var botao = document.getElementById("btnFlutuante").style;
      $("#chat-bot").fadeOut(0);
      $("#imagem").fadeIn(100);
       
      botao.width = "50px";
      botao.height = "50px"; 
      botao.bottom = "15px";
      botao.right = "15px";  
      botao.borderRadius = "50%"; 
  }
/*
  //Eperar o efeito de sumir ou aparecer os botoes 
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
*/
  function girarScroll(){
    //await sleep(400);
    //Scroll automático
    var textArea = document.getElementById('chat-history');
    textArea.scrollTop = textArea.scrollHeight;
  }

  function configuraCampo(state){
    $("#ip-message").removeAttr( "type" );
    $("#ip-message").removeAttr( "onclick" );
    if (state == "S_CLICK"){
      $(".text-input").fadeOut(0);
    }else{
      $(".text-input").fadeIn(0);

      if (state == "S_TYPE_INT"){
        $("#ip-message").mask('99');

      }else if (state == "S_TYPE_CPF"){
        $("#ip-message").mask('999.999.999-99');
        $("#ip-message").attr("onkeyup", "keyup(event)");

      }else if (state == "S_TYPE_PHONE"){
        $("#ip-message").mask('(99) 99999-9999');

      }else if (state == "S_TYPE_EMAIL"){
        $("#ip-message").attr("type", "email");
      }
    }
  }

  function keyup(event){
    if(event.keyCode==13){
      validarCPF();
    }
  }

  function validarCPF() {
    var valido = true;
    var cpf = $("#ip-message").val();
    cpf = cpf.replace(/[^\d]+/g,'');   
    if(cpf == '') valido = false; 

    // Elimina CPFs invalidos conhecidos    
    if (cpf.length != 11 || 
        cpf == "00000000000" || 
        cpf == "11111111111" || 
        cpf == "22222222222" || 
        cpf == "33333333333" || 
        cpf == "44444444444" || 
        cpf == "55555555555" || 
        cpf == "66666666666" || 
        cpf == "77777777777" || 
        cpf == "88888888888" || 
        cpf == "99999999999")
            valido = false;       
    
    // Valida 1o digito 
    add = 0;    
    for (i=0; i < 9; i ++)       
        add += parseInt(cpf.charAt(i)) * (10 - i);  
        rev = 11 - (add % 11);  
        if (rev == 10 || rev == 11)     
            rev = 0;    
        if (rev != parseInt(cpf.charAt(9)))     
            valido = false;       
    
    // Valida 2o digito 
    add = 0;    
    for (i = 0; i < 10; i ++)        
        add += parseInt(cpf.charAt(i)) * (11 - i);  
    rev = 11 - (add % 11);  
    if (rev == 10 || rev == 11) 
        rev = 0;    
    if (rev != parseInt(cpf.charAt(10)))
        valido = false;   

    if(!valido) 
        printBotMessage("Insira um CPF valido!",null);
    else
        printUserMessage($("#ip-message").val());      
  }

  function newpostReq(request){
    var xmlhttp = new XMLHttpRequest();
    var url = "http://backend-dot-chatbot-sd.appspot.com/_ah/api/sd/v1/chatbot";
    var data = JSON.stringify(request);

    xmlhttp.onreadystatechange = function() {//Call a function when the state changes.
        if(xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200) {
            success(JSON.parse(xmlhttp.responseText));
        }
    }

    xmlhttp.responseType = "text";
    xmlhttp.open("POST",url,true);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.send(data);
  }

  function success(response) {
      request = response;  
      console.log("Bot:");
      console.log(response);
      
      $("#buttons-area").fadeOut(0);
      girarScroll();
      configuraCampo(response.state);
      printBotMessage(response.answer, response.options);
  }