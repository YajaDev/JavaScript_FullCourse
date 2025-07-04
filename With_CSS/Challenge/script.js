//for buttons
function toggleButton(selector) {
    const button = document.querySelector(selector);
    
    if (!button.classList.contains('clicked')) {
        
        // Before turning this button ON, check if there's
        // already a button that's turned ON and turn it OFF.
        deletePreviousToggle();

        button.classList.add('clicked');
    } else{
        button.classList.remove('clicked');
    } 
}

function deletePreviousToggle() {
    const previousToggle = document.querySelector('.clicked');
    if (previousToggle) {
        previousToggle.classList.remove('clicked');
    }
}

//for Amazon Shipping Calculator
function calculate() {
    const outputElement = document.querySelector('#total-cost');
    let orderCost = Number(document.querySelector('#cost').value);
    //remove error every run of this function
    outputElement.classList.remove('error');

    if(orderCost < 0){
        outputElement.classList.add('error');
        outputElement.innerText = 'Error: cost cannot be less than $0';
        return;
    }

    if (orderCost < 40) {
         orderCost += 10;                
    }

    orderCost = Number(orderCost.toFixed(2));
    outputElement.innerText= `$${orderCost}`; 
}

function handleKeyDown(event) {
            
    if (event.key === 'Enter') {
        calculate();    
    }
}