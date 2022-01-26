<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat&family=Open+Sans&family=Quicksand:wght@700&display=swap" rel="stylesheet">
    <title>Косметика Чебоксары</title>
</head>
<body>
    <link rel="stylesheet" href="./CSS/style.css">
    <nav></nav>

    <div class="vhod" id="reg"></div>
    <div class="vhod" id="vhod"></div>
    
    <section class="___section__parent_card_male_m_top">
        <h1 align="center" style="font-size: 30px; margin-bottom: 16px;">Топ мужских ароматов</h1>
        
        <div class="__pod_section__parent_card_male_m_top">
        <a id="svap_left"><</a>
        <?php
                require './JS/bd.php';
                $stmt = $db_top->query("select top_aromat_m from top"); // 
                $posts = $stmt->fetchAll(); // Делаем массив)
                foreach($posts as $key => $top): // Тырим данные
            ?>
            <div class="__parent_card_male_m_top">
                <a class="href_to_help_php" href="./html1/<?=$top['top_aromat_m']?>.html">
                <div class="card_male_m_top">
                    <img src="./img/<?=$top['top_aromat_m']?>.jpg" alt="">
                    <h1><?= $top['top_aromat_m']?></h1>
                </div>
            </a>
            </div>
            
        <?php  endforeach;?>
        <a id="svap_right">></a>
        </div>
        

    </section>

    <script src="./JS/index.js"></script>
    <script src="./JS/index_Index.js"></script>
</body>
</html>