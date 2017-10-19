function arreglo(){
	var carros = [
	["polo.jpg", "VW", "Polo", "Azul", "Dos puertas"], 
	["charger.jpg", "Dodge", "Charger", "Rojo", "Cuatro puertas"],
	["500.jpg", "Fiat", "500", "Blanco", "Dos puertas"]
	];

	var content="";
	var carro="";

	console.log(carros);

	for(var i=0; i<carros.length; i++){
		
		carro = carro + "<div class='coche'>";
		
		for (var j=0; j<carros[i].length; j++){
			if(j == 0){
				console.log("Foto:" + carros[i][j]);
				carro = carro + "<div class='foto'>" + carros[i][j] + "</div>";
			} else {
				if( j == 1){
					console.log("Marca: " + carros[i][j]);
					carro = carro + "<div class='marca'>" + carros[i][j] + "</div>"; 
				} else {
					if(j == 2){
						console.log("Modelo: " + carros [i][j]);
						carro = carro + "<div class='modelo'>" + carros[i][j] + "</div>";
					} else{
						if(j == 3){
							console.log("Color" + carros[i][j]);
							carro = carro + "<div class='color'>" + carros[i][j] + "</div>";
						}else{
							console.log("Puertas: " + carros[i][j]);
							carro = carro + "<div class='puertas'>" + carros[i][j] + "</div>";
						}
					}
				}
			}
		}


		carro = carro + "</div>"
		content = content + carro;
		console.log(content);
				carro=""
	}

	document.getElementById('lista').innerHTML = content;		
}