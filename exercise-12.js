function konversiMenit(menit) {
    var sisaMenit = menit % 60;
    var jam = (menit - sisaMenit) / 60;
    if(jam < 0){
        jam = 0;
    }else if(sisaMenit < 10){
        sisaMenit = '0'+ sisaMenit;
    }
    return jam + ':' + sisaMenit;
  }
  
  console.log(konversiMenit(63));
  console.log(konversiMenit(124));
  console.log(konversiMenit(53));
  console.log(konversiMenit(88));
  console.log(konversiMenit(120)); 