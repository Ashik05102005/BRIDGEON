let age="8";
let type= typeof age;
if(type!="number"){
    console.log("Invalid age entered.");
}
else if(age>=18 )
{
    console.log("You are eligible to vote");
}
else if(age>0 && age<18 ){
    console.log("You are not eligible to vote yet");
}
else{
    console.log("Invalid age entered.");
}

