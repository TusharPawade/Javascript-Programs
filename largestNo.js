let a = Number(prompt("Enter 1st number "));
let b = Number(prompt("Enter 2nd number "));
let c = Number(prompt("Enter 3rd number "));
let d = ()=>{
    if(a>b && a>c){
        console.log(`${b} is greater`);
    }
    else if(b>c){
        console.log(`${b} is greater `);
    }
    else{
        console.log(`${c} is greater `);
    }
}
d();