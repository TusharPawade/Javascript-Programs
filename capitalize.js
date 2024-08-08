let str = "Welcome to javascript";
let arr = str.split(" ");

let capitalize = () => {
    let capital = "";
    for(let i = 0; i < arr.length; i++){
        capital = capital + arr[i].charAt(0).toUpperCase() + arr[i].slice(1,arr[i].length-1) + arr[i].charAt(arr[i].length - 1).toUpperCase()+" ";
    }
    return capital;
}

console.log(capitalize());


