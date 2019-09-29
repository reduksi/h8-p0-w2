//number one
var i = 0;
console.log('LOOPING PERTAMA');
while(i <= 18){
    i+=2;
    console.log(i + ' - I love coding');
}
console.log('LOOPING KEDUA');
while(i >= 2){
    console.log(i + '- I will become fullstack developer');
    i-=2;
}

console.log('========================================'); // pembatas

//number two
console.log('LOOPING PERTAMA');
for(i = 1; i <= 20; i++){
    console.log(i + ' - I love coding');
}
console.log('LOOPING KEDUA');
for(i = 20; i >= 1; i--){
    console.log(i + ' - I will become fullstack developer');
}

console.log('========================================'); // pembatas

//number three
console.log('LOOPING PERTAMA');
for(i = 1; i <= 100; i++){
    if(i%2 === 0){
        console.log('GENAP');
    } else {
        console.log('GANJIL');
    }
}

console.log('LOOPING KEDUA');
for(i = 1; i <= 100; i+=2){
    if(i%3 === 0){
        console.log(i + 'kelipatan 3');
    }else{
        console.log('');
    }
}

console.log('LOOPING KETIGA');
for(i = 1; i <= 100; i+=5){
    if(i%6 === 0){
        console.log(i + 'kelipatan 6');
    }else{
        console.log('');
    }
}

console.log('LOOPING KEEMPAT');
for(i = 1; i <= 100; i+=9){
    if(i%10 === 0){
        console.log(i + 'kelipatan 10');
    }else{
        console.log('');
    }
}
