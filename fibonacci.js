let n = prompt("Enter a number ");
let fib = ()=>{
    let firstTerm = 0;
    let SecondTerm = 1;
    let arr = [];
    arr.push(firstTerm);
    arr.push( SecondTerm);

    for(let i=1 ; i<n-1 ; ++i){
        nextTerm = firstTerm + SecondTerm;
        arr.push( nextTerm);
        firstTerm = SecondTerm;
        SecondTerm = nextTerm;         
    }
    return (arr.join(''));
} 
console.log(fib());