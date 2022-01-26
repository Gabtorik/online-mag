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
function coordination_slaider(){
    let __parent_card_male_m_top = document.getElementsByClassName('__parent_card_male_m_top');
    const screenWidth = window.screen.width;
    var coord = document.getElementsByClassName('__parent_card_male_m_top')[4].getBoundingClientRect();
    
    for (let i = 0; i < __parent_card_male_m_top.length; i++) {
      let coord = __parent_card_male_m_top[i].getBoundingClientRect();
      console.log(`ScreenWidth: ${screenWidth}, coord.x: ${coord.x}`);
      console.log(coord)
      if(coord.right>screenWidth){
        __parent_card_male_m_top[i].style.cssText=`display:none`
      }
    }
  }
function main(){
    coordination_slaider()
    password = document.getElementById('pas1');
    password2 = document.getElementById('pas2');
    setInterval(() => {
        if(document.activeElement.tagName=='INPUT' && password.value!='' && password2.value!=''){
            pass();
        }
    }, 500);
    btn()
}
main()
