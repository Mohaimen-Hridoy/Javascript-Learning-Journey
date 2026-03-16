console.log(document.getElementsByTagName("h1"));

const target=document.getElementsByClassName("title");

const targetById=document.getElementById("title");

console.log(target);
console.log(targetById);

targetById.style.color="red";

const allBox=document.getElementsByClassName("box");

for(let i=0;i<allBox.length;i++){
    const element=allBox[i];
    element.style.backgroundColor="green";

    if(element.innerText==="box-5"){
        element.style.backgroundColor="red";
    }
}

const handleSearch=(event)=>{
    console.log("Hello Box");
}