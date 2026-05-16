let str="Programming";
str=str.toLowerCase();
console.log(str);
const letters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let i,j,n=0;;
let arr=new Array();
for(i=0;i<str.length;i++)
{
    for(j=0;j<letters.length;j++)
    {
        if(str[i]===letters[j])
        {
            if(!arr.includes(letters[j]))
            {   
                console.log(str[i]);
                arr[n]=str[i];
                n++;
                
            }
        }
    }

}
