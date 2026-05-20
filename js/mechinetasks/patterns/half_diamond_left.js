let star="*";
let str=""
let i,j,n=10,k;

    for(j=(n/2);j>=0;j--)
    {   k=j;
        str="";

        while(k>0){
            str+="."
            k--;
        }
        str+="*";
        if(j!==0){
            console.log(str); 
        }
        else{
            console.log(str)
            break;
        }

            
    }
    str="";
    for(j=0;j<=(n/2);j++)
    {   k=j;
        while(k<=j){
            if(j==0 && k==0){
                str+="*";
            }
            else{}
            str+="."
            k++;
        }
    
        console.log(str);
    }
    

    
    
 