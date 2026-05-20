let str="";
let num=5;
let i,k;
for(i=num;i>=0;i--){
    for(k=num-i;k>0;k--){
        str+=' '
    }
    for(j=1;j<=(2*i-1);j++){
        str+="*";
    }
    console.log(str);
    str="";
}
