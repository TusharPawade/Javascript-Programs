// let arr = [{
//     "id": 1,
//     "name": "John Doe",
//     "age": 20,
//     "gender": "Male",
//     "email": "john.doe@example.com",
// },
// {
//     "id": 2,
//     "name": "Jane Smith",
//     "age": 21,
//     "gender": "Female",
//     "email": "jane.smith@example.com",
// },
// {
//     "id": 3,
//     "name": "Michael Johnson",
//     "age": 22,
//     "gender": "Male",
//     "email": "michael.johnson@example.com",
// },
// {
//     "id": 4,
//     "name": "Emily Brown",
//     "age": 20,
//     "gender": "Female",
//     "email": "emily.brown@example.com",
// },
// {
//     "id": 5,
//     "name": "William Lee",
//     "age": 23,
//     "gender": "Male",
//     "email": "william.lee@example.com",
// },];
// console.log(arr);
// let str = prompt("Search");
// let search = str.toLowerCase();

// for (let i = 0; i < arr.length; i++) {
//     let name = arr[i].name.toLowerCase();    
//     if (search == name.charAt(i)) {
//         console.log(arr[i].name);
//     }
// }


let arr = [
    {
        "id": 1,
        "name": "John Doe",
        "age": 20,
        "gender": "Male",
        "email": "john.doe@example.com",
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "age": 21,
        "gender": "Female",
        "email": "jane.smith@example.com",
    },
    {
        "id": 3,
        "name": "Michael Johnson",
        "age": 22,
        "gender": "Male",
        "email": "michael.johnson@example.com",
    },
    {
        "id": 4,
        "name": "Emily Brown",
        "age": 20,
        "gender": "Female",
        "email": "emily.brown@example.com",
    },
    {
        "id": 5,
        "name": "William Lee",
        "age": 23,
        "gender": "Male",
        "email": "william.lee@example.com",
    },
];

let str = prompt("Search");

let search = str.toLowerCase(); 

for (let i = 0; i < arr.length; i++) {

    if (arr[i].name.toLowerCase().charAt(i) == search) {
        console.log(arr[i].name);
    }
}
