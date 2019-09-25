function xo(str) {
    var xCounter = 0;
    var oCounter = 0;
    for(var i = 0; i <= str.length - 1; i++){
        if(str[i] === 'x'){
            xCounter = xCounter + 1;
        } else if(str[i] === 'o'){
            oCounter = oCounter + 1;
        }
    }
    if(xCounter === oCounter){
        return true;
    }else{
        return false;
    }
  }
  
  console.log(xo('xoxoxo')); 
  console.log(xo('oxooxo')); 
  console.log(xo('oxo')); 
  console.log(xo('xxxooo'));
  console.log(xo('xoxooxxo'));