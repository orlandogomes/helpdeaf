 <?php $admin_email = "flavio.brognara@outlook.com";
  $email = $_REQUEST['email'];
  $nome = $_REQUEST['nome'];
  $comment = $_REQUEST['mensagem'];
  
  //send email
  mail($admin_email, $nome, $comment, "From:" . $email);
  
  echo "<script>alert('Enviado com sucesso!');history.back();</script>";
  
  ?>
  
  
  
  