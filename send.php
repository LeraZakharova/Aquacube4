<?php 
/* Осуществляем проверку вводимых данных и их защиту от враждебных  
скриптов */ 
$Name = htmlspecialchars($_POST["Name"]); 
$Email = htmlspecialchars($_POST["Email"]); 
$Phone = htmlspecialchars($_POST["Phone"]); 
$Description = htmlspecialchars($_POST["Description"]); 
/* Устанавливаем e-mail адресата */ 
$myemail = "info@aquacube.pro";  
/* Создаем новую переменную, присвоив ей значение */ 
$message_to_myemail = "Здравствуйте!  
В форме обратной свзи на Aquacube новое сообщение.  
Имя отправителя: $Name  
E-mail: $Email  
Номер телефона: $Phone
Текст сообщения: $Description
Конец";
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
/* Отправляем сообщение, используя mail() функцию */ 
mail($myemail, "Заявка с сайта", $message_to_myemail); 
?>
<html>
  <head>
    <link href="https://fonts.googleapis.com/css?			family=Montserrat:100,200,300,400,500|Rubik:300,400,500,700" rel="stylesheet">
  </head>
  <body>
	<div style="width:100%; height:100%; font-family: 'Rubik', sans-serif; font-variant: all-petite-caps; font-weight: 400; font-size: 22px; display:flex; flex-direction: column; justify-content: center; align-items: center;">
		<p>Ваше сообщение было успешно отправлено!</p> 
		<p>На <a href="index.html">Главную >>></a></p>
	</div>
  </body>
</html>
<?php 
/* Если при заполнении формы были допущены ошибки сработает  
следующий код: */ 
function check_input($data, $problem = "") 
{ 
$data = trim($data); 
$data = stripslashes($data); 
$data = htmlspecialchars($data); 
if ($problem && strlen($data) == 0) 
{ 
show_error($problem); 
} 
return $data; 
} 
function show_error($myError) 
{ 
?> 
<html> 
<body> 
<p>Пожалуйста исправьте следующую ошибку:</p> 
<?php echo $myError; ?> 
</body> 
</html> 
<?php 
exit(); 
} 
?>