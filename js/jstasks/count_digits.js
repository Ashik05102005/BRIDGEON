let n=1234;
let rem=0,rev=0,count=0;
while(n>0){
    rem=n%10;
    rev=rev*10+rem;
    n=Math.floor(n/10);
    count++;
}
console.log(count);