function animation(){
    setTimeout(() => {
      let animItems = document.querySelectorAll('._anim');
    
    if(animItems.length > 0){
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 50;
    
                let animItemPoint = window.innerHeight - animItemHeight / animStart;
    
                if(animItemHeight>window.innerHeight){
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }
                
                if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                    animItem.classList.add('_active');
                } else {
                    if(!animItem.classList.contains('_animNoNe')){
                       animItem.classList.remove('_active'); 
                    }
                }
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
        } 
        setTimeout(() => {
        animOnScroll()
        }, 300);
    }
    }, 2000);
  }

function main() {
    console.log(document.getElementsByTagName('title')[0].innerText=`Поиск: ${localStorage.getItem('value')}`);
    let temp = '';
    let temp_sum = 0;
    animation()
    // console.log(localStorage.getItem('value'));
    fetch('../results_women.json')
  .then((response) => {
    return response.json();
  }).then((data) => {

    for (let i = 0; i < data.Numbers.length; i++) {
        // console.log(data.ider[i][data.Numbers[i]].Name.toLowerCase().indexOf(search.value.toLowerCase())) A
        if (data.ider[i][data.Numbers[i]].Name.toLowerCase().indexOf(localStorage.getItem('value').toLowerCase()) > -1) {
          // console.log(`Value =  ${search.value}, Data = ${data.ider[i][data.Numbers[i]].Name.substring(0, search.value.length)}, Мнение: ${data.ider[i][data.Numbers[i]].Name}`)
          
          temp+=`<div class="carta _anim">
          <img align="left" src="./img/${data.Numbers[i]}.jpg" height='250px'>
          <h1 align="center">${data.ider[i][data.Numbers[i]].Name} (№ ${data.Numbers[i]})</h1>
          <p align="center">${data.ider[i][data.Numbers[i]].Description.substring(0, 700) + '...'}</p>
          <h2 align="right" style="font-size: 15px; color: red;"><del>5.000 рублей</del></h2>
          <h3 align="right">2.000 рублей</h3>
          <a class="button" href="./html1/${data.Numbers[i]}.html">Подробнее</a>
          </div>
          <div class="break"></div>`; temp_sum++;
        }
        // if(i==data.Numbers.length-1){
        //   // console.log(temp)
        //   document.getElementById(`search_res`).innerHTML=temp;
        //   break;
        // }
      }
      fetch('../results_men.json')
      .then((response) => {
        return response.json();
      }).then((data2) => {
    
        for (let i = 0; i < data2.Numbers.length; i++) {
            // console.log(data.ider[i][data.Numbers[i]].Name.toLowerCase().indexOf(search.value.toLowerCase())) A
            if (data2.ider[i][data2.Numbers[i]].Name.toLowerCase().indexOf(localStorage.getItem('value').toLowerCase()) > -1) {
              // console.log(`Value =  ${search.value}, Data = ${data.ider[i][data.Numbers[i]].Name.substring(0, search.value.length)}, Мнение: ${data.ider[i][data.Numbers[i]].Name}`)
              
              temp+=`<div class="carta _anim">
              <img align="left" src="./img/${data2.Numbers[i]}.jpg" height='250px'>
              <h1 align="center">${data2.ider[i][data2.Numbers[i]].Name} (№ ${data2.Numbers[i]})</h1>
              <p align="center">${data2.ider[i][data2.Numbers[i]].Description.substring(0, 700) + '...'}</p>
              <h2 align="right" style="font-size: 15px; color: red;"><del>5.000 рублей</del></h2>
              <h3 align="right">2.000 рублей</h3>
              <a class="button" href="./html1/${data2.Numbers[i]}.html">Подробнее</a>
              </div>
              <div class="break"></div>`; temp_sum++;
            }
        }
          document.getElementById(`search_res`).innerHTML=temp;
          document.getElementById(`number`).innerHTML=temp_sum;
          document.getElementById(`value`).innerHTML=localStorage.getItem('value');
      });
  });
  setTimeout(() => {
    document.getElementById('loading').style.cssText=`display: none;`
  }, 4000);
}
main()