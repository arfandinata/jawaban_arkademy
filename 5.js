function panggilSort(num){
   var tes = num.toString();
   var angka = tes.split("0")
   var databaru = "";
   var angkadigit = []
   var hasil;


    for(i = 0; i< angka.length; i++){
        angkadigit.push(angka[i].split(""))
    }

    for(i = 0; i<angkadigit.length; i++){
        var angkas = angkadigit[i].sort();
        databaru += angkas.join("")  
    }

    hasil = Number(databaru)
   console.log(hasil)
}


panggilSort(967575065432)