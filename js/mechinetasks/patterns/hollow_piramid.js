let str="";
let num=5;
let i,k;
for(i=1;i<=num;i++){
    for(k=num-i;k>0;k--){
        str+=' '
    }
    for(j=1;j<=(2*i-1);j++){
        if(j==1||j==(2*i-1)||i==num){
        str+="*";
        }
        else{ 
            str+=" "
        }
    }
    console.log(str);
    str="";
}
