function input_chek(){
    male = document.getElementById('mujskie_male');
    count = 0;
    a = []
    // console.log(!male.children.item(1).value)
    fetch('../results_men.json')
    .then((response) => {
      return response.json();
    }).then((data) => {
        for (let i = 1; i < male.children.length-1; i++) {
            for (let j = 0; j < data.Numbers.length; j++) {
                if(male.children.item(1).value){
                    if (male.children.item(i).value == data.Numbers[j]) {
                        count++;
                        a.push(male.children.item(i).value)
                        // console.log(`Count = ${count}, Item = ${male.children.item(i).value}, Data.Numbers = ${data.Numbers[j]}`);
                    }
                }
            }
            if(count == 5){
                console.log(hasDuplicates(a))
                if(!hasDuplicates(a)){
                    document.getElementById('btn1').removeAttribute('disabled');
                }
            }
        }
});


jen = document.getElementById('jenskie_male');
count = 0;
b = []
fetch('../results_women.json')
.then((response) => {
  return response.json();
}).then((data) => {
    for (let i = 1; i < jen.children.length-1; i++) {
        for (let j = 0; j < data.Numbers.length; j++) {
            if(jen.children.item(1).value){
                if (jen.children.item(i).value == data.Numbers[j]) {
                    count++;
                    b.push(jen.children.item(i).value)
                    // console.log(`Count = ${count}, Item = ${male.children.item(i).value}, Data.Numbers = ${data.Numbers[j]}`);
                }
            }
        }
        if(count == 5){
            console.log(hasDuplicates(a))
            if(!hasDuplicates(b)){
                document.getElementById('btn2').removeAttribute('disabled');
            }
        }
    }
});
}
function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}
function _btn_click_male(){
    document.getElementsByClassName('btn-adm-mj-help')[0].addEventListener('click', function(){

            // document.getElementsByClassName('form_male_parent')[1].style.cssText = 'z-index:1;';
            // document.getElementsByClassName('form_male')[1].style.cssText = 'opacity:1;';
            document.getElementsByClassName('form_male_parent')[1].classList.toggle('_active');
            document.getElementsByClassName('form_male')[1].classList.toggle('_active');
            document.getElementsByClassName('form_male_parent')[0].classList.remove('_active');
            document.getElementsByClassName('form_male')[0].classList.remove('_active');
            // document.getElementsByClassName('form_male_parent')[0].style.cssText = 'z-index:-1;';
            // document.getElementsByClassName('form_male')[0].style.cssText = 'opacity:0;';
        
    });
    document.getElementsByClassName('btn-adm-mj-help')[1].addEventListener('click', function(){

            // document.getElementsByClassName('form_male_parent')[0].style.cssText = 'z-index:-1;';
            // document.getElementsByClassName('form_male')[0].style.cssText = 'opacity:0;';
            document.getElementsByClassName('form_male_parent')[0].classList.toggle('_active');
            document.getElementsByClassName('form_male')[0].classList.toggle('_active');
            document.getElementsByClassName('form_male_parent')[1].classList.remove('_active');
            document.getElementsByClassName('form_male')[1].classList.remove('_active');
            // document.getElementsByClassName('form_male_parent')[1].style.cssText = 'z-index:-1;';
            // document.getElementsByClassName('form_male')[1].style.cssText = 'opacity:0;';
            
    });
    document.getElementById('new_top').addEventListener('click', function(){
        document.getElementsByClassName('btn-adm-mj-help')[0].style.cssText = 'opacity: 1; z-index: 1;';
        setTimeout(() => {
            document.getElementsByClassName('btn-adm-mj-help')[1].style.cssText = 'opacity: 1; z-index: 1;';
        }, 200);
    });
}
function main(){
    setInterval(() => {
        input_chek()
    }, 500);
    _btn_click_male()
}
main();