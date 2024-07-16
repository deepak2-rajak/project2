let btn=document.querySelector("button");
let mode="dark";
let body=document.querySelector("body");
btn.addEventListener("click",function(){

    if(mode==="dark"){
        mode="light";
        console.log("balck color");
        body.style.backgroundColor="black";
        btn.style.color="black";
        
    }else if(mode==="light"){

    mode="dark";
        console.log("color is white");
        body.style.backgroundColor="white";
    }
});