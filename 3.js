
// function perulangan
function perulangan(){
    var nilai = "";
    for(i = 1; i<=6; i++){
        for(j=1;j<=11;j++){
            if(i === 1){
                nilai += " * "
            }
            else{
            if(j===i){
            nilai += " * "}
            else if(j === (12-i))
            nilai += " * "
            else
            nilai += "   "
            }
            
        }
        console.log(nilai)
        nilai = ""
    }
    }
    
    // testing
    perulangan()