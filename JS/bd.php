<?php
    //Подключение к бд users / join to BD users
    $db_host = "localhost"; 
    $db_user = "root"; // Логин БД
    $db_password = "root"; // Пароль БД 
    $db_base = 'parfum'; // Имя БД
    $db_table = "users"; // Имя Таблицы БД

    $db_users = new PDO("mysql:host=$db_host;dbname=$db_base", $db_user, $db_password, [
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);

    // Подключение к бд ТОПА / join to BD top
    $db_host_top = "localhost"; 
    $db_user_top = "root"; // Логин БД
    $db_password_top = "root"; // Пароль БД 
    $db_base_top = 'parfum'; // Имя БД
    $db_table_top = "top"; // Имя Таблицы БД

    $db_top = new PDO("mysql:host=$db_host_top;dbname=$db_base_top", $db_user_top, $db_password_top, [
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);

    // $stmt = $pdo->query("select p.*, u.login from posts p inner join users u on p.user_id=u.id"); // 
    // $posts = $stmt->fetchAll(); // Делаем массив)
    // foreach($posts as $key => $post): endforeach; // Тырим данные
?>