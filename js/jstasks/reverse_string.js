let str="hello";
let len=str.length;
let rev=new Array();
let n=0;
for(let i=len-1;i>=0;i--){
    rev[n]=str[i];
    n++;
}
console.log(rev);