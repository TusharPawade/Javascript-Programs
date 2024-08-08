let name = prompt("Enter your name : ");
console.log(name);
let age = prompt("Enter your age : ");
console.log(age);
let course = prompt("Enter your course Engineering/Medical : ");
console.log(course); 
if (course == "Engineering") {
    let cgpa = prompt("Enter your cgpa : ");
    console.log(cgpa);
    if (cgpa< 7 ){
        let gate = prompt("Enter your gate % : ");
        console.log(gate);
        if (gate < 50) {
            console.log("You are not Eligible.");
        }
        else{
        console.log("You are Eligible");
        }
    }
    else{
        let gate = prompt("Enter your gate % : ");
        console.log(gate);
        if (gate <= 60) {
            console.log("You are not Eligible.");   
        }
        else{
            console.log("You are Eligible");
        }
    }
}
else if(course=="Medical"){
    let per = prompt("Enter your percentage : ");
    console.log(per);
    if (per<= 60 ){
        let Branch = prompt("Enter your Future Branch Abroad/India : ");
        console.log(Branch);
        if (Branch == "Abroad") {
            let toef = prompt("Enter your toef% : ")
            console.log(toef);
            if (toef<80) {
                console.log("You are not Eligible : ");
            }
            else{
                console.log("You are Eligible : ");
            }
        }
        else{
        console.log("You are Eligible for Everything : ");
        }
    }
    else{
        // let per = prompt("Enter your % : ");
        // console.log(per);
        let specification = prompt("Enter your specification Heart/Neuro: ");
        console.log(specification);
    }
}
else{
    console.log("Enter correct course name : ")
}