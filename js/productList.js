var listProductList = [
  	[
		[
			'0',
			'Lipeza de Carro',
			'32.00',
			'img/p00.jpg'
		],
		[
			'1',
			'Lipeza de Moto',
			'25.99',
			'img/p01.jpg'
		],
		[
			'2',
			'Lipeza de Bicicleta',
			'10.50',
			'img/p02.jpg'
		]
	],
	[
		[
			'0',
			'Arroz 1k',
			'10.30',
			'img/p10.jpg'
		],
		[
			'1',
			'Peito de frango kg',
			'12.49',
			'img/p11.jpg'
		],
		[
			'2',
			'Coca-Cola Lata',
			'5.27',
			'img/p12.jpg'
		],
		[
			'3',
			'Monster Lata',
			'6.10',
			'img/p13.jpg'
		],
		[
			'4',
			'Tomate kg',
			'3.90',
			'img/p14.jpg'
		]
	],
	[
		[
			'0',
			'Salgado',
			'4.00',
			'img/p20.jpg'
		],
		[
			'1',
			'Suco',
			'2.00',
			'img/p21.jpg'
		],
	],
	[
		[
			'0',
			'Agua',
			'1.00',
			'img/p30.jpg'
		]
	],
]

window.onload = function(){
	var stringToInsert = "";
	var id = window.location.search.replace("?id=", "");
	var body = document.getElementById("bodyProductList");
	var anchor = 1;
	for(i = 0; i < listProductList[id].length; i++){
		if(anchor==1){
			stringToInsert = stringToInsert+'<div class="productDivOne"><img src="'+listProductList[id][i][3]+'"><h1>'+listProductList[id][i][1]+'</h1><div class="price"><p>Valor:</p><p>'+listProductList[id][i][2]+'</p><p>R$</p></div></div>';
			anchor = 2;
		}else{
			stringToInsert = stringToInsert+'<div class="productDivTwo"><img src="'+listProductList[id][i][3]+'"><h1>'+listProductList[id][i][1]+'</h1><div class="price"><p>Valor:</p><p>'+listProductList[id][i][2]+'</p><p>R$</p></div></div>';
			anchor = 1;
		}
	}
	body.innerHTML = stringToInsert;
};