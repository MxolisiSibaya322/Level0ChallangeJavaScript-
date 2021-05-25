
function maximumNumber(...args){
    biggest = args[0];
    for(var i=0;i<arguments.length;i++){
        if(biggest<args[i]){
         biggest= args[i];
        }
    }   
    console.log(biggest);
    return biggest            
}
maximumNumber(5,7,8);           //calling a function