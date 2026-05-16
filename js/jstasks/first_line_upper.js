let sent="hello world hi world"
let new_sent=new Array();
let i;
for(i=0;i<sent.length;i++)
{
    new_sent[i]=sent[i];
}   
let capital;
function upperCase(char){
    Upper=char.toUpperCase();
    return Upper;
}
console.log(new_sent)
for(i=0;i<new_sent.length;i++)
{
    if(i===0 || new_sent[i]==" "){
        if(new_sent[i]==" ")
        {
            i++;
        }
        capital=upperCase(new_sent[i]);
        console.log(capital);
        new_sent[i]=capital;
        
    }
}
console.log(new_sent);


