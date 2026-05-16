function palindrome(pal){
    pal=pal.toLowerCase();
    let pal_len=pal.length;
    let n=0,count=0;
    let rev=new Array();
    console.log(pal);

    for(let i=pal_len-1;i>=0;i--){
        rev[n]=pal[i];
        n++;

    }

    for(let i=0;i<pal_len;i++){
        if(rev[i]==pal[i])
        {
            count++;
        }
    }
    if(count==pal_len)
    {
        console.log( "it is a palindrome")
    }
    else{
        console.log("not a palindrome")
    }
}
palindrome("malayalam")