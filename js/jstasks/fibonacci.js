let fib=new Array();
let first=0,seccond=1,temp,n=7;
for(let i=0; i<n;i++){
    console.log(first);
    temp=seccond;
    seccond+=first;
    first=temp;
}