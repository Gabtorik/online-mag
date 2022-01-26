<?php
// $data = array( 'name' => $name, 'last_name' => $last_name, 'password' => $password, 'email' => $email, 'lvl' => $lvl);
// // Подготавливаем SQL-запрос
// $query = $db->prepare("INSERT INTO $db_table (name, last_name, password, email, lvl) values (:name, :last_name, :password, :email, :lvl)");
    if($_POST['male']=='m'){
        require "./bd.php";
        $del = $db_top->prepare("delete from $db_table_top ORDER BY `$db_table_top`.`id` DESC"); 
        $del->execute();  
        for ($i=0; $i < 6; $i++) {
            $data = array( 'top_aromat_jen'=>$i, 'top_aromat_m' => $_POST["number$i"], 'top_cosmetic'=> $i);
            // Подготавливаем SQL-запрос
            $query = $db_top->prepare("INSERT INTO $db_table_top (top_aromat_jen, top_aromat_m, top_cosmetic) values (:top_aromat_jen, :top_aromat_m, :top_cosmetic)");
            $query->execute($data);   
        }

    } else if($_POST['male']=='j'){
        echo "j";
    } 
?>