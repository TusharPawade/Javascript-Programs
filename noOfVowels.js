let str = prompt("Enter a String ");
str2 = str.toLowerCase();
count = 0;
let vowels = () => {
    for(let i=0 ; i<str2.length ; i++){
        if (str2[i]=='a' || str2[i]=='e' || str2[i]=='i' || str2[i]=='o' || str2[i]=='u') {
            count++;
        }
    }
    console.log(count);
}
vowels();