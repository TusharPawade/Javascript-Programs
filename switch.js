let name = prompt("Enter your name : ");
console.log(name);
let age = prompt("Enter your age :");
console.log(age);
let course = prompt("Enter your course engineering/medical"); 
console.log(course);
switch (course) {
    case "engineering":
        console.log("Engineering ");
        let cgpa = prompt("Enter your cgpa : ");
        console.log(cgpa);
        if (cgpa < 7) {
            let gate = prompt("Enter your gate percentage : ");
            console.log(gate);
            if (gate < 50) {
                console.log("You are not eligible ");
            }
            else{
                console.log("You are eligible ")
            }
        }
        else{
            let gate = prompt("Enter your gate percentage : ");
            console.log(gate);
            if (gate < 60) {
                console.log("you are not eligible for Abroad ");
            }
            else{
                console.log("You are eligible for Abroad ");
            }
        }
        break;
    case "medical":
        console.log("medical ");
        let percentage= prompt("Enter your percentage ");
        console.log(percentage);
        if (percentage < 60) {
            let branch = prompt("Enter your branch 1.Abroad 2.India ");
            console.log(branch);
            switch (branch) {
                case "Abroad":
                    let toefl = prompt("Enter your toefl ");
                    console.log(toefl);
                    if (toefl < 80) {
                        console.log("you are not Eligible ");
                    }
                    else{
                        console.log("You are eligible for Abroad ")
                    }
                    
                    break;
                case "India": 
                    console.log("you are eligible for everything ");
            
                default:
                    console.log("Invalid Input ");.1
                    break;
            }
        }
        else{
            let specification = prompt("Enter your specification 1.Heart 2.Neuro");
            console.log(specification);
        }
        break;
    default:
        console.log("Check your spelling ");
        break;
}