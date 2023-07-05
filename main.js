onload = () =>{
        document.body.classList.remove("container");
};

var txt = document.querySelector(".text");

setTimeout(()=>{
        txt.classList.add("anim");
        txt.style.opacity = "1";
}, 3500);
