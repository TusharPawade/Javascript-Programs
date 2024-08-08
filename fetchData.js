let n = prompt("Enter operation :\n 1.Search \n 2.Delete \n 3.Create ");
async function fetchStudentData() {
    let response = await fetch("https://freetestapi.com/api/v1/students?limit=20");
    let studentData = await response.json();
    console.log(studentData);

    switch (n) {
        case "1":
            let value = prompt("Enter Name");
            for (let i = 0; i < studentData.length; i++) {
                if (value == studentData[i].name) {
                    console.log(`id = ${studentData[i].id},
                \n name : ${studentData[i].name},
                \n Age: ${studentData[i].age}, 
                \n Gender : ${studentData[i].gender}, 
                \n Street : ${studentData[i].address.street},
                \n City : ${studentData[i].address.city},
                \n Zip : ${studentData[i].address.zip},
                \n Country : ${studentData[i].address.country},
                \n Email : ${studentData[i].email}, 
                \n Phone : ${studentData[i].phone},
                \n courses : ${studentData[i].courses}, 
                \n Gpa : ${studentData[i].gpa}`);
                }
            }
            break;

        case "2":
            let idNumber = Number(prompt("Enter a Number "));
            let arr2 = [];
            for(let i=0 ; i<studentData.length ; i++){
                if (idNumber != studentData[i].id) {
                    arr2.push(studentData[i]);
                }
            }
            console.log(arr2);
            break;

        case "3":    
        let newStudent = {
            id: Number(prompt("Enter id: ")),
            name: prompt("Enter name: "),
            age: Number(prompt("Enter age: ")),
            gender: prompt("Enter gender: "),
            street: prompt("Enter street: "),
            city: prompt("Enter city: "),
            zip: Number(prompt("Enter zip: ")),
            country: prompt("Enter country: "),
            email: prompt("Enter email: "),
            phone: BigInt(prompt("Enter phone: ")),
            courses: prompt("Enter courses: "),
            gpa: prompt("Enter GPA: ")
        };
        studentData.push(newStudent);
        console.log(studentData);
            break;

        default:
            console.log("Invalid Number ");
            break;
    }
}
fetchStudentData();
