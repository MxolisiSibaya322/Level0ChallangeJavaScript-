function convertToTime(num){
    var hours = Math.floor(num / 60) ;
    var minutes = num -(60* hours);
    if ((hours==1)&&(Minutes==1)){
        console.log(hours+ ' Hour ' + minutes + ' Minute');    //logic to deal with plurals
    }else if (minutes==1){ 
        console.log(hours+ ' Hours ' + minutes + ' Minute');
    }else if(hours==1){
        console.log(hours+ ' Hour ' + minutes + ' Minutes');
    }else{
        console.log(hours+ ' Hours ' + minutes + ' Minutes');
    }
}
convertToTime(183);  
