
let a = prompt("choose operation no. 1.degree to farenheit 2.farenheit to degree");
let temp = () => {
    switch (a) {
        case "1":
            {let far = prompt("Enter farenheit ");
            
            deg = (far-32)*5/9;}
            return deg;
            //break;
            

        case "2":
            {let deg = prompt("Enter degree ");
            far = 9/5*deg+32;}
            return far;
    
        default:
            alert("Check yur operation ");
            break;
    }
}
console.log(temp());
