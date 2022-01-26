function search(){
    let search = document.getElementById('search');
    let temp  = '';
    let temp_sum = 0;
    let temp_text = '';
    let spisok_search = document.getElementById('spisok_search');
      fetch('../results_women.json')
      .then((response) => {
        return response.json();
      }).then((data) => {
  
          for (let i = 0; i < data.Numbers.length; i++) {
          if (search.value == data.Numbers[i]) {
            spisok_search.innerHTML=`
        <a href="../html1/${data.Numbers[i]}.html">
            <img src="../img/${data.Numbers[i]}.jpg" alt="loading">
            <h1>${data.ider[i][data.Numbers[i]].Name}</h1>
            <p>${data.ider[i][data.Numbers[i]].Description.substring(0, 100) + '...'}</p>
        </a>`
        search.addEventListener('keydown', function(event) {
          if (event.code == 'Enter') {
            document.location.href = `../html1/${data.Numbers[i]}.html`
          }
        });
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
        <a href="../html1/${data.Numbers[i]}.html" style='margin-top:${50*temp_sum}px;'>
            <img src="../img/${data.Numbers[i]}.jpg" alt="loading">
            <h1>${data.ider[i][data.Numbers[i]].Name} (№ ${data.Numbers[i]})</h1>
            <p>${data.ider[i][data.Numbers[i]].Description.substring(0, 100) + '...'}</p>
        </a>`
        temp_sum++;
            if (temp_sum > 4){
              temp+=`<a href="../search.html" target="_blank" style='margin-top:${50*temp_sum}px;' class="search_href">Остальные результаты</a>`
              spisok_search.innerHTML=temp;
              new_page(search.value)
              break;
            }
          }
          }
          spisok_search.innerHTML=temp;
          temp_text=search.value
      });
  
        fetch('../results_men.json')
        .then((response) => {
          return response.json();
        }).then((data) => {
          for (let i = 0; i < data.Numbers.length; i++) {
            if (search.value == data.Numbers[i]) {
              spisok_search.innerHTML=`
          <a href="../html1/${data.Numbers[i]}.html">
              <img src="../img/${data.Numbers[i]}.jpg" alt="loading">
              <h1>${data.ider[i][data.Numbers[i]].Name}</h1>
              <p>${data.ider[i][data.Numbers[i]].Description.substring(0, 100) + '...'}</p>
          </a>`
          search.addEventListener('keydown', function(event) {
            if (event.code == 'Enter') {
              document.location.href = `../html1/${data.Numbers[i]}.html`
            }
          });
            }
            }
          for (let i = 0; i < data.Numbers.length; i++) {
            if (data.ider[i][data.Numbers[i]].Name.toLowerCase().indexOf(search.value.toLowerCase()) > -1) {
              // console.log(`Value =  ${search.value}, Data = ${data.ider[i][data.Numbers[i]].Name.substring(0, search.value.length)}, Мнение: ${data.ider[i][data.Numbers[i]].Name}`)
              temp+=`
          <a href="../html1/${data.Numbers[i]}.html" style='margin-top:${50*temp_sum}px;'>
              <img src="../img/${data.Numbers[i]}.jpg" alt="loading">
              <h1>${data.ider[i][data.Numbers[i]].Name} (№ ${data.Numbers[i]})</h1>
              <p>${data.ider[i][data.Numbers[i]].Description.substring(0, 100) + '...'}</p>
          </a>`
          temp_sum++;
              if (temp_sum > 4){
                temp+=`<a href="../search.html" target="_blank" style='margin-top:${50*temp_sum}px;' class="search_href">Остальные результаты</a>`
                spisok_search.innerHTML=temp;
                new_page(search.value)
                break;
              }
              spisok_search.innerHTML+=temp;
            }
          }
          // console.log(temp)
        });
        // spisok_search.innerHTML=temp;
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
                      <li> <a href="../">Главная</a></li>
                      <li> <a href="../women.html">Женские ароматы </a></li>
                      <li> <a href="../men.html">Мужские ароматы </a></li>
                      <li> <a href="../premium.html">Премиальные ароматы </a></li>
                      <li> <a href="../cosmetics.html">Косметика </a></li>
                  </ul>
              </div>
          </li>
          <!-- <li><img src="../img/logo.py.png" alt=""></li> -->
          <li id="search_li"><input type="text" id="search" size="40" placeholder="Поиск ">
              <div id='spisok_search'class="spisok_search">
              </div>
          </li>
          <li><a id = 'vhod' style='cursor: pointer;'>Войти</a></li>
      </ul>`
}

function main(){
  nav();
    let searcher = document.getElementById('search');
    let temp_text = '';
    let spisok_search = document.getElementById('spisok_search');
    setInterval(() => {
        // search()
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