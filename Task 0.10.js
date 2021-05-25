function commonLetters(str1,str2){     // logic for finding common letters
    //wordOne = str1.split(",")
    var common = "";
    str1 = str1.split('');
    str2 = str2.split(''); 
    str1.forEach(x =>{
        if (str2.includes(x)){
            common +=  str2[str2.indexOf(x)] ;
            str2.splice(str2.indexOf(x), 1);
        }
    })
    console.log(common);
    return common;
}
    commonLetters('House','Computers');