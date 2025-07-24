let mode = true;
let btn = document.querySelector("button");
btn.onclick = () => {
    let bg = document.querySelector("body");
    let btn = document.querySelector("button");
    if(mode){
        bg.classList.add("black");
        bg.classList.remove("white");
        btn.innerText = "White Mode";
        mode = false;
    }else{
        bg.classList.add("white");
        bg.classList.remove("black");
        btn.innerText = "Black Mode";
        mode = true;
    }
}