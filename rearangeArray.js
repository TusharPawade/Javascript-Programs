let arr = [1, 2, -3, -4, -5, -6];
let arrange = () => {
    let pos = [];
    let neg = [];
    
    for(let i=0 ; i<arr.length ; i++){
        if(arr[i]>0){
            pos.push(arr[i]);
        }
        else
        {
            neg.push(arr[i]);
        }
    }
    //console.log(pos);
    let i = 0;
    let res = [];
    
    while (pos.length>0 || neg.length>0){
        if (pos.length>0) {
            res.push(pos.shift());
        }
        if(neg.length>0){
        res.push(neg.shift());
        }
    }
    
    console.log(res);

}
arrange();