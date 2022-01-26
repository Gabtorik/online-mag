<?php
    // Переменные с формы
    $password = $_POST['password'];
    $email = $_POST['email'];
    // Параметры для подключения
    $db_host = "localhost"; 
    $db_user = "root"; // Логин БД
    $db_password = "root"; // Пароль БД
    $db_base = 'parfum'; // Имя БД
    $db_table = "users"; // Имя Таблицы БД
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
                    <li>
                    <a id="new_top">Новый топ</a> <br>
                    <div class="_gl_btn-adm-mj-help">
                        <button class="btn-adm-mj-help">Женские</button>
                        <button class="btn-adm-mj-help">Мужские</button>
                    </div>
                    
                    <div class="form_male_parent">
                        <form action="./top.php" id="mujskie_male" class="form_male" method="post">
                            <h2>Мужские</h2>
                            <input type="text" name="male" value="m" style="display:none"> <!-- Скрытый параметр-->
                            <input type="number" name="number1">
                            <input type="number" name="number2">
                            <input type="number" name="number3">
                            <input type="number" name="number4">
                            <input type="number" style="margin-bottom: 15px;" name="number5">
                            <br>
                            <input type="submit" class="btn-submit-php" id="btn1" disabled>
                        </form>
                    </div>

                    <div class="form_male_parent">
                        <form action="./top.php" id="jenskie_male" class="form_male" method="post">
                        <h2>Женские</h2>
                        <input type="text" name="male" value="j" style="display:none"> <!-- Скрытый параметр-->
                        <input type="number" name="number1">
                        <input type="number" name="number2">
                        <input type="number" name="number3">
                        <input type="number" name="number4">
                        <input type="number" style="margin-bottom: 5px;" name="number5">
                        <br>
                        <input type="submit" class="btn-submit-php" id="btn2" disabled>
                    </form>
                    </div>
                    
                </li>
                    <li><a>Изменить общую цену</a></li>
                    <li><a>Выдать админ права по ID</a></li>
                </ul>
                
                
            <?php ;} else {
            echo "<script>document.location.replace('../');</script>";
        }
    
    ?></body>
    <script src="./php_help_vhod.js"></script>
</html>