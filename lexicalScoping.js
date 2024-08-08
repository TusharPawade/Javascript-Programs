function abc(){
    let a = "Outer";
    function xyz(){
        console.log(a);
    }
        return xyz;
}
let z = abc();
z();