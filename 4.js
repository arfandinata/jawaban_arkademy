//function dengan parameter
function hitungPohon(tinggiAwal,tahun){
    var tahun_sekarang = 2021
    var tinggi_sekarang = tinggiAwal

    var lama = tahun - tahun_sekarang

    for( var i = 0; i < lama; i++){

    tahun_sekarang  += 1;

    console.log(tahun_sekarang , "awal tahun :",tinggi_sekarang,"meter")

    var semi = tinggi_sekarang + 1;
    var panas = semi * 3;
    var gugur = panas - 1.5;
    var percen15 = (gugur*15)/100;
    var dingin = percen15 +gugur;

    tinggi_sekarang = dingin

    if( (tahun_sekarang % 2) === 0){
        dingin = dingin /2
    }

    console.log(tahun_sekarang , "akhir tahun :",dingin,"meter")
        
    }

    

}
//testing
hitungPohon(2,2023)