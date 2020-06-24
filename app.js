window.onload=()=>{
let button=document.querySelector('#btn');
button.addEventListener("click",calculateBMI);

}
function calculateBMI(){
  let hight=  parseInt(document.querySelector("#hight").value);
   let weight= parseInt(document.querySelector("#weight").value);
   let result=parseInt(document.querySelector("#result").value);
   console.log(hight);
   if(hight ==='' || isNaN(hight)){
       result.InnerHTML="Please provide a valid hight";
   }
}