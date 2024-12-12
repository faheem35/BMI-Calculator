const enteredWeight=document.getElementById("weight")
const enteredHeight=document.getElementById("height")
const displayBmi=document.getElementById("bmi")
const displayDesc=document.getElementById("desc")





function submitfn(){
    const weightK=parseFloat(enteredWeight.value)
    const heightM=parseFloat(enteredHeight.value)/100
   
//bmi
const calculatedBmi=(weightK/(heightM*heightM)).toFixed(1)
    displayBmi.textContent=calculatedBmi
    
}