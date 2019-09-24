//number 1
var rows1 = 5;
var i;
for (i = 1; i <= rows1; i++) {
    console.log('*');    
}

console.log('======end======');
//number 2
var rows2 = 5;
var j;
var hrz = '';
for (i = 1; i <= rows1; i++) {
    for (j = 1; j <= rows1; j++) {
        hrz = hrz + '*';
    }
    console.log(hrz);
    hrz = '';    
}

console.log('======end======');
//number 2
var rows3 = 5;
hrz = '';
for (i = 1; i <= rows1; i++) {
    for (j = 1; j <= i; j++) {
        hrz = hrz + '*';
    }
    console.log(hrz);
    hrz = '';    
}