let heading = "Akan";
document.title = "Akan";


let dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
let maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
let femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

let form = document.getElementById("form");
 let year =   document.getElementById("year");
form.addEventListener('submit', (e)=>{
     e.preventDefault()
  
     if (year == ""){
         alert("fill in the form");
     }
     
});