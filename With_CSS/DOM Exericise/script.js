function handleKeyDown(event) {
            
    if (event.key === 'Enter') {
        calculate();    
    }
}

function calculate() {
    let orderCost = Number(document.querySelector('#cost').value);
    
    if (orderCost < 40) {
        orderCost += 10;                
    }
    
    orderCost = Number(orderCost.toFixed(2));

    document.querySelector('#total-cost').innerText = `$${orderCost}`; 
}

function Subscribe() {
    const buttonElement = document.querySelector('button');

    if (buttonElement.innerText === 'Subscribe') {
        buttonElement.innerText = 'Subscribed';
        buttonElement.classList.add('is-subscribed')
    } else {
        buttonElement.innerText = 'Subscribe';
        buttonElement.classList.remove('is-subscribed')
    }
}