let str="";
let num=10;
let i,j;
for(i=1;i<=num;i++){
    for(j=1;j<=num;j++){
        
        if(j==1||j==num||i==1||i==num){
            str+="*"+"\t";
        }
        else{
            str+=" "+"\t";
        }
}
console.log(str);
str="";
}