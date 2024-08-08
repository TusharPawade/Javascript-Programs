let n = prompt("Enter a number ");
let leepYear = () =>{
    if(n%4==0 || n%400==0){
        console.log("It is a leap year");
    }
}
leepYear();