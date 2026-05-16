const pattern='*';
let j=1;
for(let i=1;i<=5;i++){
   let j=1; 
    while(j<=i){
        process.stdout.write(pattern);
        j++;
    }
    console.log("")
}