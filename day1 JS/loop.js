for(let i=1;i<=5;++i){
    console.log(i);
}
let num=[22,34,45,55,67]
let sum=0;
for(let j=0;j<num.length;++j){
    sum+=num[j];
}
console.log(sum);
for(j=0;j<num.length;++j){
    if(num[j]%2==0){
        console.log(num[j]+" is even");
    }
    else{
        console.log(num[j]+" is odd");
    }
}