<?php

	function fibonacci($n) {
			if($n <= 0) {
					return 0;
			} elseif ($n == 1) {
					return 1;
			}
			return fibonacci($n-1) + fibonacci($n-2);
	}

	if(!isset($_POST['prueba'])){

		$numero = $_POST['numero'];
	
		$resultado = array(
			'n' => fibonacci($numero),
			// 'n' => 993111866,
			'n-1' => fibonacci($numero - 1)
		);

		echo json_encode($resultado);
	} else {
		echo json_encode(1);
	}
