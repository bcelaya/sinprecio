function sinprecio(){
var prueba = document.getElementsByClassName("item-content products-content");

for (i=0;i<prueba.length;i++){

		// variable con el html en texto para comprobar si esta o no la etiqueta precio

		var pruebatexto = prueba[i].outerHTML;

		
		// misma variable pero con el HTML para despues poder usar el insertAdjacentHTML despues

		var pruebahtml = prueba[i].innerHTML;

		var resultado = pruebatexto.indexOf('<span class="price">');

		if (resultado==-1){

		// vamos a recoger todo el fragmento del sku

		var dondestasku = pruebatexto.indexOf('<div class="sku">');

		var skucierrediv = pruebatexto.indexOf('</div>');

		var trozosku = pruebatexto.slice(dondestasku,skucierrediv+6);

		// Ahora vamos a recoger el titulo

		var dondeestah4 = pruebatexto.indexOf('<h4>');

		var dondeacabah4 = pruebatexto.indexOf('</h4>')

		var trozoh4 = pruebatexto.slice(dondeestah4,dondeacabah4+5);

		var anyadido = '<span class="price"><span class="woocommerce-Price-amount amount">CONSULTAR PRECIO<span class="woocommerce-Price-currencySymbol"></span></span><br><span class="sincompetencia">Llamenos para consultar nuestros precios<br>(ofertas personalizadas)</span></span>';

		var trozoh4 = trozoh4+anyadido;

		//

		resto = pruebatexto.slice(dondeacabah4+5);

		sumahtml = trozosku+trozoh4+resto;

		prueba[i].innerHTML=sumahtml;}
	}
}