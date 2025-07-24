let btn = document.querySelector("button");
btn.onclick = (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.clientX);
    // console.log(e.clientY);
    // console.log(e.type);

};
let name = "Mitesh";
let age = 31;
// document.write("My Name is " + name + " and My Age is " + age);
document.write(`My Name is "${name}" and My Age is ${age}`);
document.onmousemove = (e)=>{
    // console.log(e.clientX);
    // console.log(e.clientY);
    let xPer = e.clientX / window.innerWidth * 100;
    // console.log(xPer);
    let yPer = e.clientY / window.innerHeight * 100
    // console.log(yPer);
    // document.body.style = `background-color:hsl(${e.clientX} ${xPer} ${yPer})`;
};