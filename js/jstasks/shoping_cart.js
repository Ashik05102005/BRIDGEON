function tot(obj){
    console.log(obj);
    q=obj.quantity;
    p=obj.price;
    return p*q;    

}
const item1={
    'name':"bmw",
    "quantity":100,
    "price":6000000
    }
    const item2={
    'name':"benz",
    "quantity":150,
    "price":8500000
    }
    const item3={
    'name':"audi",
    "quantity":200,
    "price":5000000
    }
let arr=[item1,item2,item3];

for(let i in arr){
    total=tot(arr[i]);
    console.log("  the total cost for  "+arr[i].name+"  is  "+total)
}