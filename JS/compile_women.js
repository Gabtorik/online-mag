a = []
function Fetcher(){
  fetch('./results_women.json')
  .then((response) => {
    return response.json();
  }).then((data) => {
    // console.log(data)
    // console.log(data.ider);
    // renderBlocks(data)
    renderBlocks2(data);
    return data;
  });
}
function renderBlocks(data) {
  // console.log(data.Numbers)
  iner = ''
  for (let i = 0; i < data.Numbers.length; i++) {
    if(i+1%3==0){
      iner+=`
        <div class="carta _anim">
        <img src="../img/${data.Numbers[i]}.jpg" width='200px'>
        <h1 align="center" >${data.ider[i][data.Numbers[i]].Name}</h1>
        <p align="center">${data.ider[i][data.Numbers[i]].Description.substring(0, 400) + '...'}</p>
        <h3 align="right">1500 рублей</h3>
        <a href="#" class="floating-button">Подробнее</a>
        </div>
        <div class="break"></div> `
        if(i == data.Numbers.length-1){
          document.getElementById('cart').innerHTML=iner
        }
    }
    
    else{
      iner+=`
        <div class="carta _anim">
        <img src="../img/${data.Numbers[i]}.jpg" width='200px'>
        <h1 align="center">${data.ider[i][data.Numbers[i]].Name}</h1>
        <p align="center">${data.ider[i][data.Numbers[i]].Description.substring(0, 300) + '...'}</p>
        <h3 align="right">1500 рублей</h3>
        <a href="#" class="floating-button">Подробнее</a>
        </div> `
        
        if(i == data.Numbers.length-1){
          document.getElementById('cart').innerHTML=iner
        }
    }
  }
}
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

{/* <div class="carta _anim">
            <img align="left" src="../img/101.jpg" width='200px'>
            <h1 align="center">Lorem</h1>
            <p align="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptates ab nihil dolore iusto perferendis, ea itaque ut deleniti non inventore sit eum alias. Perspiciatis adipisci consequuntur ipsam dicta aut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptates ab nihil dolore iusto perferendis, ea itaque ut deleniti non inventore sit eum alias. Perspiciatis adipisci consequuntur ipsam dicta aut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptates ab nihil dolore iusto perferendis, ea itaque ut deleniti non inventore sit eum alias. Perspiciatis adipisci consequuntur ipsam dicta aut.</p>
            <h3 align="right">1500 рублей</h3>
            <a href="#" class="floating-button">Подробнее</a>
        </div>  */}
function renderBlocks2(data) {
  // console.log(data.Numbers)
  iner = ''
  for (let i = 0; i < data.Numbers.length; i++) {
    
      iner+=`
      <div class="carta _anim">
      <img align="left" src="./img/${data.Numbers[i]}.jpg" height='250px'>
      <h1 align="center">${data.ider[i][data.Numbers[i]].Name} (№ ${data.Numbers[i]})</h1>
      <p align="center">${data.ider[i][data.Numbers[i]].Description.substring(0, 700) + '...'}</p>
      <h2 align="right" style="font-size: 15px; color: red;"><del>5.000 рублей</del></h2>
      <h3 align="right">2.000 рублей</h3>
      <a class="button" href="./html1/${data.Numbers[i]}.html">Подробнее</a>
      </div>
      <div class="break"></div>`
        
        if(i == data.Numbers.length-1){
            document.getElementById('cart').innerHTML=iner
        }
    }
}
// -->
function main(){
  Fetcher()
  animation()
  // as = 'CHANEL EGOISTE PLATINUM'
  // console.log(as.indexOf('CHANEL EGO'))
  setTimeout(() => {
    document.getElementById('loading').style.cssText=`display: none;`
  }, 4000);
};
main()