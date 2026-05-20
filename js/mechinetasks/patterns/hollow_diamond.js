let str="";
let num=10;
let i,k;

for(i=1;i<=num;i++){
    for(k=num-i;k>0;k--){
        str+=' '
    }
    for(j=1;j<=(2*i-1);j++){
        if(j==1||j==(2*i-1)){
            str+="*";
        }
        else{
            str+=' '
        }
    }
    console.log(str);
    str="";
}

for(i=num-1;i>=0;i--){
    for(k=num-i;k>0;k--){
        str+=' '
    }
    for(j=1;j<=(2*i-1);j++){
        if(j==1||j==(2*i-1)||j==0){
            str+="*";
        }
        else{
            str+=' '
        }
            
    }
    console.log(str);
    str="";
}