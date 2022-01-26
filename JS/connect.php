<?php
    // Переменные с формы
    $name = $_POST['name'];
    $last_name = $_POST['last_name'];
    $password = $_POST['password'];
    $email = $_POST['email'];
    $lvl = 0;
    if(!$name){
        header('Location:../'); exit;
    }
    // Параметры для подключения
    $db_host = "localhost"; 
    $db_user = "root"; // Логин БД
    $db_password = "root"; // Пароль БД
    $db_base = 'parfum'; // Имя БД
    $db_table = "users"; // Имя Таблицы БД
    // session_start();
    // $_SESSION['sell'] = ;
    try {
        // Подключение к базе данных
        $db = new PDO("mysql:host=$db_host;dbname=$db_base", $db_user, $db_password);
        // Устанавливаем корректную кодировку
        $db->exec("set names utf8");
        // Собираем данные для запроса
        $data = array( 'name' => $name, 'last_name' => $last_name, 'password' => $password, 'email' => $email, 'lvl' => $lvl);
        // Подготавливаем SQL-запрос
        $query = $db->prepare("INSERT INTO $db_table (name, last_name, password, email, lvl) values (:name, :last_name, :password, :email, :lvl)");
        // Выполняем запрос с данными
        $query->execute($data);
        // Запишим в переменую, что запрос отрабтал
        $result = true;
    } catch (PDOException $e) {
        // Если есть ошибка соединения или выполнения запроса, выводим её
        print "Ошибка!: " . $e->getMessage() . "<br/>";
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat&family=Open+Sans&family=Quicksand:wght@700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../CSS/style_php.css">
    <title>Личный кабинет</title>
</head>
<body><?php
        $link = mysqli_connect($db_host, $db_user, $db_password, $db_base);
        $sql = mysqli_query($link, "SELECT `ID`, `name`, `last_name`, `email`, `password`,`lvl` FROM `users` WHERE email='$email'");
        while ($result = mysqli_fetch_array($sql)) {
            $id = $result['ID'];
            $names = $result['name'];
            $last_names = $result['last_name'];
            $emails = $result['email'];
            $lvls = $result['lvl'];
            $passwords = $result['password'];
        }
        if($passwords==$password){?>
            <nav>
            <ul>
                <li>Logo</li>
                <li style='opacity: 0;'>.</li>
                <li><?= $names?> <?= $last_names?> </li>
            </ul>
            </nav>
            <?php }
            if($lvls>5){?>

                <div class='adminka'>
                <h1 align='center'>Administration</h1>
                <div class='break_adm'></div>
                <ul>
                    <li><a>Новый топ</a></li>
                    <li><a>Изменить общую цену</a></li>
                    <li><a>Выдать админ права по ID</a></li>
                </ul>
                <form action="top.php">
                    <input type="text">ЯЯЯЯЯЯЯЯЯЯЯ</input>
                </form>
                
            <?php ;} else {
            echo "<script>document.location.replace('../');</script>";
        }
    
    ?></body>
    
</html>