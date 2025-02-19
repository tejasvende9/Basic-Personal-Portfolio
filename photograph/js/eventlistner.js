let r =document.getElementById('redbtn');
let g =document.getElementById('greenbtn');

r.addEventListener("click",()=>{
    document.getElementById('bg').style.backgroundColor="red";
});
g.addEventListener("click",()=>{
    document.getElementById('bg').style.backgroundColor="green";
});