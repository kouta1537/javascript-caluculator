let display = document.getElementById('output');



function calc(){
  try{
    display.textContent = eval (display.textContent);}
        catch(e) {
            display.textContent = "Error";
        }  
  } 



function reset() {
    display.textContent = "";
}


function set(btn) {
    let currentValue = display.textContent;
    let btnValue = btn.textContent.trim();
    if(currentValue === "" && btnValue === '0'){
        display.textContent = '0';
    } else if (currentValue === '0' && btnValue === '0'){
    }else if (!isOperator(currentValue.slice(-1))||
    !isOperator(btnValue)) {
        if(currentValue === '00'){
            display.textContent = '';
        } else if(currentValue === '0'){
            display.textContent += btnValue;
        } else {
        display.textContent += btnValue;  
        }
    }
}
function isOperator(character) {
    return ['+', '-', '*', '/','.'].includes(character);
}



