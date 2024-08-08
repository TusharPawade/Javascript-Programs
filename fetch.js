// async function fetchOperation() {
//     let respone = await fetch("https://jsonplaceholder.typicode.com/todos");
//     let data = await respone.json();
//     console.log(data);
// }
// fetchOperation();


// let str = prompt("Enter a name ");
// let value = str;
// let data = [
//     {name: "Subhash", id: 1},{name: "Shubham", id: 2},
//     {name: "Yash", id: 3},{name: "Tushar", id: 4},
//     {name: "Aditya", id: 5},{name: "Chinmay", id: 6}];

// for (let i = 0; i < data.length; i++) {
//     if (data[i].name== value) {
//         console.log(`name: ${data[i].name} \n id: ${data[i].id}`);
//     }
// }


// let str = prompt("Enter a name ");
// let value = str;

// async function fetchOperation(value) {
//     let response = await fetch("https://dummy.restapiexample.com/api/v1/employees");
//     let studentData = await response.json();
//     console.log(studentData);
    
//     for (let i = 0; i < studentData.length; i++) {

//         if (studentData[i].employee_name === value) {
//             console.log("tushar");
//              console.log("id:", studentData[i].id,"name:", studentData[i].employee_name,
//                "Salary:", studentData[i].employee_salary,"Age:", studentData[i].employee_age);
//         }
//     }
// }

// fetchOperation(value);



// let str = prompt("Enter a name ");
// let value = str;

// async function fetchOperation(value) {
//     let response = await fetch("https://freetestapi.com/api/v1/students?limit=5");
//     let studentData = await response.json();
//     //console.log(studentData);
    
//     for (let i = 0; i < studentData.length; i++) {

//         if (studentData[i].name == value) {
//             console.log("hello",studentData[i].courses[0]);
//              console.log("\n id=", studentData[i].id,
//                 "\n name=", studentData[i].name,
//                 "\n Age:", studentData[i].age, 
//                 "\n Gender :", studentData[i].gender, 
//                 //"\n Address :", studentData[i].address,
            
//                 "\n Street :", studentData[i].address.street,
//                 "\n City :", studentData[i].address.city,
//                 "\n Zip :", studentData[i].address.zip,
//                 "\n Country :", studentData[i].address.country,
//                 "\n Email :", studentData[i].email, 
//                 "\n Phone :", studentData[i].phone,
//                 `\ncourses : ${studentData[i].courses}`,
//                 //"\n Courses :", studentData[i].courses.join(","), 
//                 "\n Gpa :", studentData[i].gpa);
//                 // for(let j=0 ; j<studentData[i].courses.length ; j++){
//                 //     console.log("Courses check : ",studentData[i].courses[j]);
//                 // }
//         }
//     }
// }

// fetchOperation(value);


let gpa = Number(prompt("Enter GPA "));

async function fetchOperation(gpa) {
    let count = 0;
    let response = await fetch("https://freetestapi.com/api/v1/students?limit=20");
    let studentData = await response.json();

    if (gpa < 3.7) {
        for (let i = 0; i < studentData.length; i++) {
            let student = studentData[i];
            if (student.gpa < 3.7) {
                console.log("\nID:", student.id,
                    "\nName:", student.name,
                    "\nAge:", student.age,
                    "\nGender:", student.gender,
                    "\nStreet:", student.address.street,
                    "\nCity:", student.address.city,
                    "\nZip:", student.address.zip,
                    "\nCountry:", student.address.country,
                    "\nEmail:", student.email,
                    "\nPhone:", student.phone,
                    `\nCourses: ${student.courses.join(", ")}`,
                    "\nGPA:", student.gpa);
                count++;
            }
        }
        console.log(count);
    } else {
        for (let i = 0; i < studentData.length; i++) {
            let student = studentData[i];
            if (student.gpa >= 3.7) {
                console.log("\nID:", student.id,
                    "\nName:", student.name,
                    "\nAge:", student.age,
                    "\nGender:", student.gender,
                    "\nStreet:", student.address.street,
                    "\nCity:", student.address.city,
                    "\nZip:", student.address.zip,
                    "\nCountry:", student.address.country,
                    "\nEmail:", student.email,
                    "\nPhone:", student.phone,
                    `\nCourses: ${student.courses.join(", ")}`,
                    "\nGPA:", student.gpa);
                count++;
            }
        }
        console.log(count);
    }

}

fetchOperation(gpa);
