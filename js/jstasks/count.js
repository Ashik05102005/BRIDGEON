let word="apple";
let freq={};
for(let i=0; i<word.length;i++){
    let ch=word[i];
    if(freq[ch])
    {
        freq[ch]+=1;
    }
    else{
        freq[ch]=1;
    }
}console.log(freq);




