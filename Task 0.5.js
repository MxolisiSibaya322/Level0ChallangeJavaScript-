function areaOfTriangle(side1,side2,side3){       
    var s= 0.5*(side1+ side2 + side3);
    var areaTotal =  Math.sqrt(s*(s-side1)*(s-side2)*(s-side3))
    return areaTotal;
}

areaOfTriangle(2,2,2);
