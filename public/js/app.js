const frontpage=document.getElementById("page2");
console.log(frontpage);


const bar=document.getElementById("menu-bar");
const crosssign=document.querySelector(".crossSign");
const newbar=document.querySelector(".hidden-part");



const closenav=()=>{
    newbar.style.height="0";
}
const addpage=()=>{
    
        newbar.classList.toggle("invisible");
 
    
        
    // // bar.style.display="none";
};

bar.addEventListener('click',addpage)
