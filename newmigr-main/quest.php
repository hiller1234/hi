<?php

$login = $_POST['login'];
$tel = $_POST['tel'];
$region = $_POST['region'];

$login = htmlspecialchars($login);
$tel = htmlspecialchars($tel);
$region= htmlspecialchars($region);

$login = urldecode($login);
$tel = urldecode($tel);
$region = urldecode($region);

$login = trim($login);
$tel = trim($tel);
$region = trim($region);

if (mail("foofi.gg777@gmail.com",
        "ЗАЯВКА",
         "Имя: ".$login."\n".
         "Номер телефона: ".$tel."\n".
         "Регион: ".$region."\n".
         "From: no-reply@mydomain.ru \r\n") 
)    {
    echo ('Отправлено!');
}
   
else {
    echo ('Проверьте правильность написания данных');
}
    


?>