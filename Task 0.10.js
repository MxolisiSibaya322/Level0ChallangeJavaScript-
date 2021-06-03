function commonLetters(firstWord,secondWord){    
    var common = "";
    firstWord = firstWord.split('');
    secondWord = secondWord.split(''); 
    firstWord.forEach(x =>{
        if (secondWord.includes(x)){
            if (common !== "" ){
                common += ", ";
            }
            common +=  secondWord[secondWord.indexOf(x)] ;
            secondWord.splice(secondWord.indexOf(x), 1);
        }
    })
    console.log("Common letters: " + common);
   
}
    commonLetters('House','Computers');
