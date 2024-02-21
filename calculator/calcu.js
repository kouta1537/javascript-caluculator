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
    let btnValue = btn.textContent;
    if(currentValue === "" && (btnValue === '0'|| btnValue === '00')){
    } else if (!isOperator(currentValue.slice(-1))||
    !isOperator(btnValue)) {
        display.textContent +=btnValue.trim();
    }
}

function isOperator(character) {
    return ['+', '-', '*', '/','.'].includes(character);
}
