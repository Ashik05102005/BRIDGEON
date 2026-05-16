function vowels(word){
    let len=word.length;
    let vowels=['a','e','i','o','u'];
    let vow_len=vowels.length;
    let j,i,count=0,k=0;
    let vow_array=new Array();
    for(i=0;i<len;i++)
        {
            
            for(j=0;j<vow_len;j++)
            {
                if(word[i]==vowels[j])
                {
                    count++;
                    vow_array[k]=word[i];
                    k++;
                    
                }
            }
        }
    console.log(count);
    console.log(vow_array);
}
vowels("anunandha");