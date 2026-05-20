let space=" ";
let star="*";
let n=10,j=n;
for(i=0;i<=n;i++){
    let temp=i;
    let str="";
    while(j-temp>0){
        str+=star;
        temp++;
    }
    while(str.length<=10){
        str+=space;
    }
    console.log(str);
}
    
