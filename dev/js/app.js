$('#calcular').on('click', function() {
	var input = $('#input')
	var boton = $(this)
	var contador = parseInt(boton.attr('data-contador'))

	var parametros = {
		"numero" : input.val()
	}

	if(/^\d{1,}$/.test(parametros['numero'])){
		$('.alert').slideUp();
		$.ajax({
			data: parametros,
			url: './php/fibonacci.php',
			type: 'post',
			dataType: 'json',
			statusCode: {
				200: function(r) {
					var tr = "<tr>"+
										"<td>"+contador+"</td>"+
										"<td>"+input.val()+"</td>"+
										"<td>"+r['n']+"</td>"+
										"<td>"+r['n-1']+"</td>"+
									"</tr>"
					$('#tbody').append(tr)
					boton.attr('data-contador',contador+1)
				},
				404: function(e) {
					console.log(e)
				}
			}
		})
	} else {
		$('.alert').slideDown();
	}
})

$('#test').on('click', function() {

	var parametros = {
		"prueba" : '1'
	}

	$.ajax({
		data: parametros,
		url: './php/fibonacci.php',
		type: 'post',
		dataType: 'json',
		statusCode: {
			200: function(r) {
				$('.glyphicon-remove').removeClass('select')
				$('.glyphicon-ok').addClass('select')
			},
			404: function(e) {
				$('.glyphicon-remove').addClass('select')
				$('.glyphicon-ok').deletClass('select')
			}
		}
	})
})

$('#reiniciar').on('click', function() {
	$('.glyphicon-remove').removeClass('select')
	$('.glyphicon-ok').removeClass('select')
})