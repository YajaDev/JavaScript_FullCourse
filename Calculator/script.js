let toCalculate = localStorage.getItem('toCalculate');
let answer;

updateDisplay();

function updateDisplay() {
    document.getElementById("display").textContent = toCalculate;
    answer ? (document.getElementById('answer').textContent = `Total: ${answer}`)
    : document.getElementById('answer').textContent = '';
}

    function clr(){
    toCalculate = toCalculate.slice(0, -1);
    console.log(localStorage.getItem('toCalculate'));
    answer = 0; 
    updateDisplay();
}

function formula(userinput){
    if (userinput === 'Delete' || (userinput === '=' || userinput === 'Enter')) {
        if (userinput === 'Delete') {
            answer = 0
            toCalculate = ''
        } else{
            answer = eval(toCalculate);
            if ( Number.isInteger(answer)) {
                console.log( toCalculate + ' = ' + (answer));
            } else {
                answer = answer.toFixed(2);
                console.log( toCalculate + ' = ' + (answer));            
            }
            toCalculate = String(answer);
        }
    }else {
        answer = 0
        toCalculate += userinput;
    }
    localStorage.setItem('toCalculate', toCalculate)
    console.log(toCalculate);
    updateDisplay();  
}