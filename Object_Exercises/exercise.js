const person = {
    name: 'A-jay',
    age: 22,
    hieght: "5'5",
    weitht: 48
}

const nameLowercase = person.name.toLowerCase();
console.log(nameLowercase);

const nameRepeat = person.name.repeat(3);
console.log(nameRepeat);

person.age = 32
console.log(person);

//nested object
const item = {
name: 'apple',
price: 20,
'delivery-time': '1 day',
rating: {
    stars: 4.5,
    count: 89
}}

console.log(item);

//change value string to int 
item['delivery-time'] = 21;
console.log(item);

//target the nested object
console.log(`Star : ${item.rating.stars}`);

const product = {
    name: 'basketball',
    price: 2029
}

const product2 = {
    name: `Volleyball`,
    price: 500 
}

console.log(product)
console.log(product2);

product2.price = 4530;

console.log(product2);

product['delivery-time'] = '3-days'
console.log(product);

function comparePrice(item1, item2) {
    let cheaper;

    if (item1.price > item2.price) {
        return cheaper = item2
    } else if (item1.price < item2.price) {
        return cheaper = item2
    } else console.log('SAME PRICE');    
}

console.log(comparePrice(product, product2));

/*function isSameProduct(item1, item2) {
    if (item1.name === item2.name && item1.price === item2.price) {
        return true;
    } else {
        return false;
    }
}*/
function isSameProduct(product1, product2) {
        return (
          product1.name === product2.name &&
          product1.price === product2.price
        );
} 

console.log(isSameProduct(product, product2));