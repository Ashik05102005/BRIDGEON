let space=" ";
let star="*";
let n=10,j=n;
for(i=0;i<=n;i++){
    let temp=i;
    let str="";
    while(j-temp>0){
        str+=space;
        temp++;
    }
    while(str.length<=10){
        str+=star;
    }
    console.log(str);
}
    
