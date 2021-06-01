function commonLetters(firstWord,secondWord){     // logic for finding common letters
    //wordOne = str1.split(",")
    var common = "";
    firstWord = firstWord.split('');
    secondWord = secondWord.split(''); 
    firstWord.forEach(x =>{
        if (secondWord.includes(x)){
            common +=  secondWord[secondWord.indexOf(x)] ;
            secondWord.splice(secondWord.indexOf(x), 1);
        }
    })
    console.log(common);
   
}
    commonLetters('House','Computers');
