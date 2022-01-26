function search(){
    let search = document.getElementById('search');
    let temp  = '';
    let temp_sum = 0;
    let temp_text = '';
    let spisok_search = document.getElementById('spisok_search');
      fetch('./results_women.json')
      .then((response) => {
        return response.json();
      }).then((data) => {
  
          for (let i = 0; i < data.Numbers.length; i++) {

          if (search.value == data.Numbers[i]) {
            spisok_search.innerHTML=`
        <a href="./html1/${data.Numbers[i]}.html">
            <img src="./img/${data.Numbers[i]}.jpg" alt="loading">
            <h1>${data.ider[i][data.Numbers[i]].Name}</h1>
            <p>${data.ider[i][data.Numbers[i]].Description.substring(0, 100) + '...'}</p>
        </a>`

        search.addEventListener('keydown', function(event) {
          if (event.code == 'Enter') {
            document.location.href = `./html1/${data.Numbers[i]}.html`
          }}); return;
          
        }
          // if (i==data.Numbers.length-1 && search.value!=''){
          //   spisok_search.innerHTML=`Извините мы ничего не нашли`;
          // }
          }
                for (let i = 0; i < data.Numbers.length; i++) {
          // console.log(data.ider[i][data.Numbers[i]].Name.toLowerCase().indexOf(search.value.toLowerCase())) A
          if (data.ider[i][data.Numbers[i]].Name.toLowerCase().indexOf(search.value.toLowerCase()) > -1) {
            // console.log(`Value =  ${search.value}, Data = ${data.ider[i][data.Numbers[i]].Name.substring(0, search.value.length)}, Мнение: ${data.ider[i][data.Numbers[i]].Name}`)
            temp+=`
        <a href="./html1/${data.Numbers[i]}.html" style='margin-top:${50*temp_sum}px;'>
            <img src="./img/${data.Numbers[i]}.jpg" alt="loading">
            <h1>${data.ider[i][data.Numbers[i]].Name} (№ ${data.Numbers[i]})</h1>
            <p>${data.ider[i][data.Numbers[i]].Description.substring(0, 100) + '...'}</p>
        </a>`
        temp_sum++;
            if (temp_sum > 4){
              new_page(search.value)
              break;
            }
          }
          }
          spisok_search.innerHTML=temp;
          temp_text=search.value

          fetch('./results_men.json')
        .then((response) => {
          return response.json();
        }).then((data1) => {
          for (let i = 0; i < data1.Numbers.length; i++) {
            if (search.value == data1.Numbers[i]) {
              spisok_search.innerHTML=`
          <a href="./html1/${data1.Numbers[i]}.html">
              <img src="./img/${data1.Numbers[i]}.jpg" alt="loading">
              <h1>${data1.ider[i][data1.Numbers[i]].Name}</h1>
              <p>${data1.ider[i][data1.Numbers[i]].Description.substring(0, 100) + '...'}</p>
          </a>`
          search.addEventListener('keydown', function(event) {
            if (event.code == 'Enter') {
              document.location.href = `./html1/${data1.Numbers[i]}.html`
            }});return;
            }
            }
          for (let i = 0; i < data1.Numbers.length; i++) {
            if (data1.ider[i][data1.Numbers[i]].Name.toLowerCase().indexOf(search.value.toLowerCase()) > -1) {
              // console.log(`Value =  ${search.value}, data1 = ${data1.ider[i][data1.Numbers[i]].Name.substring(0, search.value.length)}, Мнение: ${data1.ider[i][data1.Numbers[i]].Name}`)
              temp+=`
          <a href="./html1/${data1.Numbers[i]}.html" style='margin-top:${50*temp_sum}px;'>
              <img src="./img/${data1.Numbers[i]}.jpg" alt="loading">
              <h1>${data1.ider[i][data1.Numbers[i]].Name} (№ ${data1.Numbers[i]})</h1>
              <p>${data1.ider[i][data1.Numbers[i]].Description.substring(0, 100) + '...'}</p>
          </a>`
          temp_sum++;
              if (temp_sum > 4){
                temp+=`<a href="./search.html" target="_blank" style='margin-top:${50*temp_sum}px;' class="search_href">Остальные результаты</a>`
                spisok_search.innerHTML=temp;
                new_page(search.value)
                break;
              }
              spisok_search.innerHTML+=temp;
            }
          }
          // console.log(temp)
        });
      });
        // spisok_search.innerHTML=temp;
} 
function load_vhod(){
  let reg = document.getElementById('reg');
  let vhod = document.getElementById('vhod');
  reg.innerHTML=`
  <a id="close1"></a>
        <div class="vhod-content">
            <a id="krest">✖</a>
            <h1>Зарегистрироваться</h1>
            <div class="break-input"></div>
            <div class="break-input"></div>
            <div class="break-input"></div>
            <div class="break-input"></div>
            <div class="break-input"></div>

            <form action="./JS/connect.php" method="POST">
                <input type="text" name="name" placeholder="Введите имя" required> <br>
                <div class="break-input"></div>
                <input type="text" name="last_name" placeholder="Введите фамилию" required> <br>
                <div class="break-input"></div>
                <input type="email" name="email" placeholder="Введите email" required> <br>
                <div class="break-input"></div>
                <input type="password" name="password" placeholder="Введите пароль" id="pas1" required> <br>
                <div class="break-input"></div>
                <input type="password" placeholder="Повторите пароль" id="pas2" required> <br>
                <div class="break-input"></div>
                <input  type="submit" class="btn" value="Зарегистрироваться" id="subm1" disabled>
            </form>
    </div>
  `;

  vhod.innerHTML=`
  <a id="close"></a>
  <div class="vhod-content">
      <a id="krest1">✖</a>
      <h1>Войти</h1>
      <div class="break-input"></div>
      <div class="break-input"></div>
      <div class="break-input"></div>
      <div class="break-input"></div>
      <div class="break-input"></div>

      <form action="./JS/vhod.php" method="POST">
          <input type="email" name="email" placeholder="Введите email" required> <br>
          <div class="break-input"></div>
          
          <input type="password" name="password" placeholder="Введите пароль" required> <br>
          
          <div class="break-input"></div><div class="break-input"></div>
          <input  type="submit" class="btn" value="Войти">
          <div class="break-input"></div> <div class="break-input"></div> <div class="break-input"></div><div class="break-input"></div>
          
          <a class="btn" id="to_reg">Зарегистрироваться</a>
      </form>
</div>
  `
}

function new_page(value) {
    localStorage.setItem('value', value);
}
function nav(){
  document.getElementsByTagName('nav')[0].innerHTML=`   
  <ul class="nav_ul">
          <li class="li_a_a">
              <a class="catalog" href="#">Каталог <!-- <h6 class="znak catalog">‹</h6> --> </a>
              <div class="spisok">
                  <ul>
                      <li> <a href="./">Главная</a></li>
                      <li> <a href="./women.html">Женские ароматы </a></li>
                      <li> <a href="./men.html">Мужские ароматы </a></li>
                      <li> <a href="./premium.html">Премиальные ароматы </a></li>
                      <li> <a href="./cosmetics.html">Косметика </a></li>
                  </ul>
              </div>
          </li>
          <!-- <li><img src="./img/logo.py.png" alt=""></li> -->
          <li id="search_li"><input type="text" id="search" size="40" placeholder="Поиск ">
              <div id='spisok_search'class="spisok_search">
              </div>
          </li>
          <li><a id = 'vhoding' style='cursor: pointer;'>Войти</a></li>
      </ul>`
}
function vhod(){
  document.getElementById('vhod').style.cssText='display: block;';
}
function close(){
  let closer = document.getElementById('close');
  closer.addEventListener('click', function(){
    document.getElementById('vhod').style.cssText=`display: none;`;
    closer.style.cssText=`display: none;`;
  });
  
  let close1 = document.getElementById('close1');
  close1.addEventListener('click', function(){
    document.getElementById('reg').style.cssText=`display: none;`;
    close1.style.cssText=`display: none;`;

  });

  let krest = document.getElementById('krest');
  krest.addEventListener('click', function(){
    document.getElementById('reg').style.cssText=`display: none;`;
  });

  let krest1 = document.getElementById('krest1');
  krest1.addEventListener('click', function(){
    document.getElementById('vhod').style.cssText=`display: none;`;

  });
};
function open(){
  let open = document.getElementById('vhoding');
  open.addEventListener('click', function(){
    document.getElementById('vhod').style.cssText=`display: block;`;
  });

  let to_reg  = document.getElementById('to_reg');
  to_reg.addEventListener('click', function(){
    document.getElementById('vhod').style.cssText=`display: none;`;
    document.getElementById('reg').style.cssText=`display: block;`;
  });
}
function pass(){
  password = document.getElementById('pas1');
  password2 = document.getElementById('pas2');
  temp = false;
  console.log(`PS1 = ${password.value}, PS2 = ${password2.value}`);
  if(password.value!=password2.value && temp!=false) {
      // сделать галочку пароля
  }
  if(password.value==password2.value){
      // сделать галочку пароля
      document.getElementById('subm1').removeAttribute('disabled');
  }
}
function btn(){
  document.getElementById('subm1').addEventListener("click", function(){
      password = document.getElementById('pas1');
      password2 = document.getElementById('pas2');
      if(password.value!=password2.value){
          alert("Пароли различаются")
      }
  });
}
function main(){
  nav();
  load_vhod();
  close();
  open();

    let searcher = document.getElementById('search');
    let temp_text = '';
    let spisok_search = document.getElementById('spisok_search');

    password = document.getElementById('pas1');
    password2 = document.getElementById('pas2');
    setInterval(() => {
        if(document.activeElement.tagName=='INPUT' && password.value!='' && password2.value!=''){
            pass();
        }
    }, 500);
    btn();
    setInterval(() => {
        if(document.activeElement.id=='search'&& searcher.value!=temp_text){
          temp_text = searcher.value;
          search();
        }
        if(searcher.value==''){
          spisok_search.innerHTML=''
        }
      }, 700);
}

main()