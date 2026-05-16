function small(arr){
    let s=arr[0];
    console.log(arr);
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i] < arr[i+1] && s > arr[i])
        {
            s=arr[i];
        }
    }
    return s;
}
num=[5,6,8,11,6,7];
smallest=small(num);
console.log(smallest);