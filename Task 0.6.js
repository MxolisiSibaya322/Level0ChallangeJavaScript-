
function maximumNumber(...args){
   var biggest = args[0];
    for(var i=0;i<arguments.length;i++){
        if(biggest<args[i]){
         biggest= args[i];
        }
    }   
    
    return biggest            
}
maximumNumber(5,7,8);          
