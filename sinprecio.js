function sinprecio(){
var prueba = document.getElementsByClassName("woo-border-box transit-all");

for (i=0;i<prueba.length;i++){

		// variable con el html en texto para comprobar si esta o no la etiqueta precio

		var pruebatexto = prueba[i].outerHTML;

		// misma variable pero con el HTML para despues poder usar el insertAdjacentHTML despues

		var pruebahtml = prueba[i].innerHTML;

		var resultado = pruebatexto.indexOf('<span class="price">');

		// Si el producto no tiene la etiqueta de precio hacemos lo siguiente

		if (resultado==-1){

			// buscamos la etiqueta <div class="sku"> y guardarmos su posicion

			var dondestasku = pruebatexto.indexOf('<div class="sku">');

			// ahora vamos a partir el html en dos para poder insertar luego la modificación antes d la etiqueta sku

			var primeraparte = pruebatexto.slice(0,dondestasku);

			var anyadido = '<span class="price"><span class="woocommerce-Price-amount amount">CONSULTAR PRECIO<span class="woocommerce-Price-currencySymbol"></span></span><br><span class="sincompetencia">Llamenos para consultar precios<br>(ofertas personalizadas)</span></span>';

			var segundaparte = pruebatexto.slice(dondestasku);

			// unimos las partes para poder despues insertarlo todo

			var htmlfinal = primeraparte+anyadido+segundaparte;

			// pegamos el html final en el elemento correspondiente

			prueba[i].innerHTML=htmlfinal;

 			} 
		}
}