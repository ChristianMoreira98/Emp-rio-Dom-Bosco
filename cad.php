<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
   <header>
   <img src="img/tangirina.png" alt="ícone tangirina">
     <h1>Cadastro de clientes | Empório Padaria</h1>
   </header>

   
   <section class="section1">

      <main class="text">
         


         <?php
           $nome = $_GET["nome"];
           $sobrenome = $_GET["sobrenome"];
           $telefone = $_GET["telefone"];
           
           
           echo "<p>É um prazer te conhecer, a Empório Padaria agradece $nome $sobrenome! Entraremos em contato com você!</p>";
           ?>

<div class="content">

   <div class="h2-feedback">
      <h2>Deixe o seu feedback!</h2>
   </div>
   
   <div class="textarea">
      <textarea name="" id="" cols="55" rows="15"></textarea>
   </div>
</div>




<button class="text-js">
   <a href="javascript:history.go(-1)">Voltar para página anterior</a>
</button>



</section>
</main>


<footer id="contatos">
   
<h2>CONTATOS</h2>

<ul class="contatos">

  <div>
    <li class="item-menu-footer">
      <img src="img/icon-telephone.png" alt="" loading="lazy">
      <p>(11) 4002-8922</p>
    </li>
    <li class="item-menu-footer">
      <img src="img/icon-local.png" alt="" loading="lazy">
      <p>Rua Dom Bosco, 757</p>
    </li>
  </div>

  <div>
    <li class="item-menu-footer">
      <img src="img/icon-wpp.png" alt="ícone whatsapp" loading="lazy">
      <p>(11) 90000-0050</p>
    </li>
    <li class="item-menu-footer">
      <img src="img/icon-instagram.png" alt="ícone instagram" loading="lazy">
      <p>@emporiodombosco</p>
    </li>
  </div>
</ul>

</footer>


</body>
</html>