const buttonP = document.querySelector("#p-button");
const buttonImg = document.querySelector("#img-button");

const pDiv = document.querySelector("#p-div")
const imgDiv = document.querySelector("#img-div")
function addP(){
   const newP = document.createElement("p");
    newP.innerText = "React is the best";

    pDiv.appendChild(newP);
    pDiv.style.display = "block";
    imgDiv.style.display = "none";

}
function addImg(){
    const newImg = document.createElement("img");
    newImg.src = "images/react.png";
    newImg.style.width = "100px";
    newImg.style.height ="100px";

    imgDiv.appendChild(newImg);
    imgDiv.style.display = "block";
    pDiv.style.display = "none";

}
buttonP.addEventListener("click", addP);
buttonImg.addEventListener("click", addImg);
