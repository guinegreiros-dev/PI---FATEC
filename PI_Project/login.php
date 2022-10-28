<?php
// Inicia a sessão
session_start();
?>
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width-device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js" integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous"></script>
        <title>Tela Inicial</title>
    </head>
	<body>
		<div class="container text-center pt-5 mb-5">
            <h1>Login</h1>
        </div>
		<div class="container text-center">
		<form action="options.php" method="post">
			<div class="row justify-content-center">
				<div class="col col-sm-2">
					<div class="form-floating mb-3">
						<input type="text" class="form-control" name="usuario" placeholder="Usuário" required>
						<label for="">Usuário</label>
					</div>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col col-sm-2">
					<div class="form-floating mb-3">
						<input type="password" class="form-control" name="senha" placeholder="Senha" required>
						<label for="">Senha</label>
					</div>
				</div>
			</div>
			<?php if ( ! empty( $_SESSION['login_erro'] ) ) :?>
					<tr>
						<td style="color: red;"><?php echo $_SESSION['login_erro'];?></td>
						<?php $_SESSION['login_erro'] = ''; ?>
					</tr>
				<?php endif; ?>
				
			<div class="row">
                <div class="col">
                <input class="btn btn-primary" type="submit" value="Entrar">
                </div>
            </div>
			</form>
			</div>
	</body>
</html>