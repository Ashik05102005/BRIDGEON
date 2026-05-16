function sum(...rest){
  console.log(rest);
  let len=rest.length;
  console.log(len);
  let sum=0;
  for(let i=0; i<len;i++)
  {
    sum=sum+rest[i];
  }
  return sum;
}
console.log(sum(1,2,3,4,5,6));