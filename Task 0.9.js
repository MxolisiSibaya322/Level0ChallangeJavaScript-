function vowels( word){
    let vowels = "";
    for(var i=0;i<= 'Word'.length ; i++){
        if ((word[i]=='a')||(word[i]=='e')||(word[i]=='i')||(word[i]=='o')||(word[i]=='u')){
            if (vowels != ""){
                vowels += ", " ;
            }
            vowels += word[i];      //finding vowels
        }
    }
    console.log(vowels);
}
vowels('Umuzi');     
