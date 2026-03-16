let x=document.getElementById("ele1");
let y=document.getElementById("ele2");
let z=document.getElementById("ele3");

x.addEventListener("click",()=>{
    x.style.color="red";
    x.style.backgroundColor="black";
    x.style.fontSize="50px";
});


y.addEventListener("mouseenter",()=>{
    y.style.color="blue";
    y.style.backgroundColor="yellow";
    y.style.fontSize="50px";
});

z.addEventListener("click",()=>{
    z.style.color="green";
    z.style.backgroundColor="pink";
    z.style.fontSize="50px";
});