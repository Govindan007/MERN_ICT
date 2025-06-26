let fname="govi", lname="s"
function add(a,b){
    let c=a+b;
    return c;
}
let d=add(3,4);
console.log(d);

function add(e,f){
    let g=e+" "+f;
    return g;
}
let h=add("govi", "s");
console.log(h);

const fullname=(fname, lname)=>{
    let fullname=fname+lname;
    console.log(fullname);
}
fullname(fname, lname);