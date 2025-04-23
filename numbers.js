//This file contains Javascript functions that is operated on numbers.
function fibo(range){
    let f1=0
    let f2=1
    let f3;
    let arr=[0,1]
    if(range==0){
        return []
    }
    if(range==1){
        return [0]
    }
    else{
    for(var i=2;i<range;i++){
        f3=f1+f2
        f1=f2
        f2=f3
        arr.push(f3)
    }
    return arr
}
}
console.log(fibo(1))