let heading = "Akan";
document.title = "Akan";


let form = document.getElementById("form");
let year  = document.getElementById("year");
let month = document.getElementById("month");
let  male = document.getElementById("male");
 let female = document.getElementById("female");
let btn = document.getElementById("btn")

function validate(){
    if (year.value == "" || year < 4){
        alert("Enter year eg: 2005");
    }else{
        return
    }
    if (month.value == ""){
        alert("Enter month");
    }else{
        return
    }
    if (date.value == ""){
        alert("Enter date");
    }else{
        return
    }
}

function calculateDayValue(){
    CC =year.value.slice(0,2)
    YY =year.value.substring(2)
    MM =month.value
    DD =date.value
    d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
return d.toFixed();
// console.log(CC);
// console.log(YY);
// console.log(MM);
// console.log(DD);

}
calculateDayValue();
 
btn.addEventListener("click", (e)=> {
    e.preventDefault();
    validate();
    calculateDayValue();
});


