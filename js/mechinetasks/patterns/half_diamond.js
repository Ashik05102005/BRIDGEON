let star="*";
let str=""
let i,j,n=10,k;

    for(j=1;j<=(n/2+1);j++)
    {
        str+=star;
        console.log(str);

    }
    str="";
     for(i=n/2-1;i>=0;i--)
    {   
        k=i;
        while(k>=0){
            str+=star;
            k--;
        }
        console.log(str);
        str="";
        
        
        }
        

    
    
