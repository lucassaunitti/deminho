var faqs = [
	{
		"pergunta" : "O que é crédito rotativo?", 
		"resposta" : "É o crédito concedido quando você não fizer o pagamento do valor total da fatura até a data de vencimento." 
			+" Significa que a diferença entre o valor total da fatura e o valor pago será acrescida de juros, somados ao valor total da fatura do mês seguinte.", 
		"tags" : ["credito","crédito","rotativo"]
	},
	{
		"pergunta" : "O que muda com as novas regras do Conselho Monetário Nacional?", 
		"resposta" : "A partir de 3 de abril de 2017, o saldo devedor das faturas de cartão de crédito só poderá ser mantido em crédito rotativo por 30 dias. "
			+" No segundo mês, se você realizar o pagamento do valor mínimo novamente, contratará automaticamente um parcelamento do saldo rotativo.", 
		"tags" : ["regras","Conselho","Monetario","Monetário"] 
	},
	{
		"pergunta" : "Sempre pago o valor total da minha fatura. Muda alguma coisa?", 
		"resposta" : "Não. Caso o valor total da sua fatura seja pago até a data de vencimento, nada muda.", 
		"tags" : ["fatura","valor total"] 
	},
	{
		"pergunta" : "O que é o Parcele Fácil?", 
		"resposta" : "O Parcele Fácil é a melhor opção quando você não puder pagar o valor total de sua fatura. Você poderá parcelar em até 24x o saldo de sua fatura, com taxas de juros 10,99% a.m. Ao parcelar a sua fatura, você sabe exatamente quanto vai pagar no próximo mês e por quanto tempo terá que pagar. Assim, fica mais fácil deixar suas contas em dia."
			+" Veja como contratar:"
			+" Você receberá em sua fatura 8 opções de parcelamento"
			+" Escolha a que melhor couber no seu bolso"
			+" Depois basta pagar o valor exato de uma das parcelas de entradas sugeridas."
			+" Pronto, parcelamento contratado."
			+" Se preferir, acesse carrefoursolucoes.com.br e faça uma simulação de parcelamento.", 
		"tags" : ["Parcele","Facil","Fácil"] 
	},
	{
		"pergunta" : "O que é o Parcela Pronta?", 
		"resposta" : "O Parcela Pronta é o parcelamento do saldo que já foi financiado pelo crédito rotativo por 30 dias. Ele será realizado automaticamente sempre que for feito o pagamento mínimo ou um pagamento menor que o valor total, em 12x fixas e sob uma taxa de 11,99% a.m. Compras realizadas entre a fatura anterior e a atual não entrarão neste parcelamento. Ou seja, poderão ser financiadas pelo crédito rotativo seguindo as mesmas regras."
			+" O parcela pronta em 12x só será ativado para saldos superiores a R$ 50,00. A cobrança será feita em uma parcela única caso o valor a ser financiado seja inferior a R$ 50,00.", 
		"tags" : ["Parcela","Pronta"] 
	},
	{
		"pergunta" : "O que acontece se eu já tiver um Parcele Fácil ativo e decidir contratar o Parcela Pronta?",		
		"resposta" : "Você receberá na fatura a cobrança das parcelas do Parcele Fácil e também as parcelas do Parcela Pronta.", 
		"tags" : ["Parcele","Facil","Fácil","Parcela","Pronta"] 
	},
	{
		"pergunta" : "Como será feito o Parcela Pronta? Preciso assinar um contrato? Este estará disponível para consulta?",		
		"resposta" : "O parcelamento será contratado automaticamente quando você fizer um pagamento entre o mínimo e o total que não seja suficiente para cobrir um saldo que já está na modalidade crédito rotativo. Não é necessário assinar nenhum contrato extra. Você pode consultar o parcelamento e outras informações na sua fatura, na área do cliente em nosso site ou app, ou entrando em contato através de um de nossos canais de atendimento.", 
		"tags" : ["Parcelamento","Pagamento","Parcela","Pronta"] 
	},
	{
		"pergunta" : "Posso escolher o valor que vou pagar além do mínimo? O que acontece?",		
		"resposta" : "Sim, pode. Se você fizer qualquer pagamento maior que o mínimo e menor que o total da sua fatura, faremos o parcelamento pronto do saldo em rotativo a 30 dias. As compras e encargos realizados na fatura atual (se houver) entrarão no crédito rotativo no mês seguinte.", 
		"tags" : ["Minimo","Mínimo","Pagamento"] 
	},
	{
		"pergunta" : "Existe um limite para parcelamentos que eu possa fazer?",		
		"resposta" : "No momento, não temos um limite de parcelamento. Mas é importante lembrar que o saldo parcelado interfere no limite do seu cartão.", 
		"tags" : ["Parcelamento"] 
	},
	{
		"pergunta" : "Como fica o meu limite com estes parcelamentos?",		
		"resposta" : "Quando você contrata um parcelamento, o valor de todas as parcelas compromete o seu limite. A medida que você for quitando as parcelas, o seu limite vai voltando.", 
		"tags" : ["Limite","Parcelamento"] 
	},
	{
		"pergunta" : "Posso adiantar o pagamento dos parcelamentos?",		
		"resposta" : "Pode. Para isso, você deve procurar um de nossos canais de atendimento e solicitar a antecipação de suas parcelas.", 
		"tags" : ["Adiantar"] 
	},
	{
		"pergunta" : "E se eu fizer um pagamento menor que o mínimo sugerido?",		
		"resposta" : "Sua fatura ficará em atraso e, caso isso persista, seu cartão poderá ser bloqueado. E, ao longo prazo, poderá ser notificado como devedor via órgãos responsáveis e áreas de cobrança do banco.", 
		"tags" : ["Pagamento","Minimo","Mínimo"] 
	}
];
   
    $(function() {      
    	for (var i = 0; i < faqs.length ; i++) {
	    	$('#conteudo').append(
	    			'<div id='+i+' class="ufaq-faq-div ufaq-faq-display-style-Color_Block" data-postid="XaR-11-'+i+'">'
	    				+'<div class="ufaq-faq-title ufaq-faq-toggle" id="ufaq-title-11" data-postid="XaR-11-'+i+'">'
	    					+'<a class="ewd-ufaq-post-margin">'
	    						+'<div class="ewd-ufaq-post-margin-symbol">'
									+'<span id="ewd-ufaq-post-symbol-XaR-11-'+i+'" class="close">+</span>'
								+'</div>'
	    						+'<div class="ufaq-faq-title-text">'
									+'<h4 itemprop="name">'+faqs[i].pergunta+'</h4>'
								+'</div>'
							+'</a>'
						+'</div>'
						+'<div class="ufaq-faq-body ewd-ufaq-hidden" id="ufaq-body-XaR-11-'+i+'">'
							+'<div class="ewd-ufaq-post-margin ufaq-faq-post" id="ufaq-post-11" itemprop="text">'
								+'<p>'+faqs[i].resposta+'</p>'
							+'</div>'
						+'</div>'
					+'</div>'
				+'</div>'
	    	);
    	}

    	$('#ufaq-ajax-text-input').keyup( function(){
    		Buscar($('#ufaq-ajax-text-input').val().trim());
    	});
    });

    function Buscar(texto){
    	var ultimo = -1;
    	for (var i = 0; i < faqs.length; i++) {
    		if (texto == ""){
				$("#"+i).fadeIn(100);    			
    		}else{
	    		if (faqs[i].pergunta.toLowerCase().indexOf(texto.toLowerCase()) != -1
	    					|| faqs[i].resposta.toLowerCase().indexOf(texto.toLowerCase()) != -1){
					$("#"+i).fadeIn(100); 
					ultimo = i; 
				}else{
	    			$("#"+i).fadeOut(100);	 	
	    		}
	    	}
    	}

    	if(ultimo>0 && document.getElementById("ewd-ufaq-post-symbol-XaR-11-"+ultimo).className.trim() == "close"){
    		$("#ewd-ufaq-post-symbol-XaR-11-"+ultimo).removeClass("close");
    		$("#ewd-ufaq-post-symbol-XaR-11-"+ultimo).click(); 
    	}
    }
