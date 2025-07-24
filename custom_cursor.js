let btn = document.querySelector("button");
let cur = document.querySelector(".cursor");
// console.log(cur);
// btn.onclick = () =>{
//     console.log("Clicked");
// }

// btn.addEventListener("click",(e)=>{
//     console.log(e.clientX);
//     console.log(e.clientY);
//     console.log("Clicked");
// });

// btn.addEventListener("click",()=>{
//     console.log("Clicked Again");
// });

document.addEventListener("mousemove",(e)=>{
    // console.log("hi");
    cur.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
    
    let xPer = e.clientX / window.innerWidth * 100;
    // console.log(xPer);
    let yPer = e.clientY / window.innerHeight * 100
    // console.log(yPer);
    document.body.style = `background-color:hsl(${e.clientX} ${xPer} ${yPer})`;
});