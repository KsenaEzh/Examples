<?php
// несколько получателей
$to  = 'qasdfghjkl296@google.com' ;  // обратите внимание на запятую

// тема письма
$subject = 'Новый подписчик';

// текст письма
$message = 'Пользователь ' . $_POST['name'] . ' хочет подписаться на рассылку. Связяться с ним можно по email <a href="mailto:' . $_POST['email'] . '">' . $_POST['email'] . '</a>'
;

// Для отправки HTML-письма должен быть установлен заголовок Content-type
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 

// Дополнительные заголовки
$headers .= 'To: Иван <qasdfghjkl296@google.com>' . "\r\n"; // Свое имя и email
$headers .= 'From: '  . $_POST['name'] . '<' . $_POST['email'] . '>' . "\r\n";


// Отправляем
mail($to, $subject, $message, $headers);
echo 'Сообщение отправлено!';

?>