//Find the subarray with the maximum product.
let arr = [[1,2,3],[4,5,56],[6,7,8,9,]];
let product = () => {
    let maxProduct = 0;
    let maxProductIndex = 1;
    for(let i=0 ; i<arr.length ; i++){
        arr[i];
        let mul = 1;
        for(let j=0 ; j<arr[i].length ; j++){
            mul = mul * arr[i][j];
        }
        if (mul > maxProduct) {
            maxProduct = mul;
            maxProductIndex =arr[i];
        }
        
        //return maxProduct[i];
    }
    console.log(`maximum product = ${maxProduct}`);
    //return arr;
    console.log(`Subarray =[${maxProductIndex}]`);
    //console.log(mul);
}
//console.log(product());
product();