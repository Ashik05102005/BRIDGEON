function createObj(key,value){
    return {[key]:value};
}
obj1=createObj("name","ashik");

for (let key in obj1){
    console.log(obj1[key])
}