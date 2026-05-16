let secret=30;
let i=1;
while(i==1){
    let num=Number(prompt("guess the number"));
    if(num==secret){
        alert(" Correct! 🎉");
        i++;
        break;    
    }
    else if(num>secret-10)
    {
        alert("low");
        num=Number(prompt("Do you want try more (0/1)"));
    }
    else if(num<secret+10)
    {
        alert("high");
        num=Number(prompt("Do you want try more (0/1)")); 
    }
    else{
        alert("TOOOOOO");
        num=Number(prompt("Do you want try more (0/1)"));
    }
}