function vowels( word){
    
    for(var i=0;i<= 'Word'.length ; i++){
        if ((word[i]=='a')||(word[i]=='A')||(word[i]=='e')||(word[i]=='E')||(word[i]=='i')||(word[i]=='I')||(word[i]=='o')||(word[i]=='O')||(word[i]=='u')||(word[i]=='U')){
            console.log('Vowel : '+ word[i]);      //finding vowels
        }
    }
}
vowels('Umuzi');     