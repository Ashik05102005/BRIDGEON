let first=48;
let seccond=18;
let i=1,gcd=0;
let smallest=Math.min(first,seccond);
while(i<smallest){
    if(first%i==0 && seccond%i==0){
        gcd=i;
    }
    i++;
}
console.log(gcd);