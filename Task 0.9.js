function vowels( word){
    let vowels = "";
    for(var i=0;i<= 'Word'.length ; i++){
        if ((word[i]=='a')||(word[i]=='A')||(word[i]=='e')||(word[i]=='E')||(word[i]=='i')||(word[i]=='I')||(word[i]=='o')||(word[i]=='O')||(word[i]=='u')||(word[i]=='U')){
            if (i!= 0){
                vowels += ", " ;
            }
            vowels += word[i];      //finding vowels
        }
    }
    console.log(vowels);
}
vowels('Umuzi');     
