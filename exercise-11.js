function balikKata(kata) {
    var kebalik = '';
    for(var i = kata.length - 1; i >= 0; i--){
        kebalik = kebalik + kata[i];
    }
    return kebalik;
  }

  console.log(balikKata('Hello World and Coders'));
  console.log(balikKata('John Doe')); 
  console.log(balikKata('I am a bookworm'));
  console.log(balikKata('Coding is my hobby'));
  console.log(balikKata('Super'));