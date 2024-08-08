let arr = [2,4,88,99,20];
let sum = 0;
let sub = 0;
for(let i=0 ; i<arr.length ; i+=2){
    sum = sum + arr[i];
}
console.log(sum);
for(let i=1 ; i<arr.length ; i+=2){
    sub = Math.abs(sub - arr[i]);
}
console.log(sub);
let subtract =Math.abs(sum-sub);
console.log(subtract);
let count =0;
for(let i=0 ; i<subtract ; i++){
    if(subtract%1==0){
        count++;
    }
}
if (count==2) {
    console.log("The no. is prime ");
}else
console.log("Not  Prime");