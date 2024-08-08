let n = prompt("Enter a number ");

let prime = () => {
    let count = 0;
    for (let i = 0; i <= n; i++) {
        if(n%i==0){
            count++;
        }
    }
    if(count==2){
        return(`Prime Number`);
    }
    else{
        return(`Not Prime Number`);
    }
}
console.log(prime());