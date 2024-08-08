let str = "welcome to javascript";
let arr = str.split (" ");

let reverse = () => {
    let reverseWord = "  ";
    for(let i=0 ; i<arr.length; i++){
       arr[i];
      
       for(let j=arr[i].length-1 ; j>=0 ; j--){
        reverseWord = reverseWord + arr[i][j];
       }
    }
    return(reverseWord);
}
console.log(reverse());
