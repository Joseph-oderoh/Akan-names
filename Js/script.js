let heading = "Akan";
document.title = "Akan";



// var form = document.getElementById("form");
// var year  = document.getElementById("year");
// var month = document.getElementById("month");
// var  male = document.getElementById("male");
// var female = document.getElementById("female");


var CC, YY, MM, DD, d, dayValue;
var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

let form = document.getElementById("form");
form.addEventListener("click", function (e) {
    e.preventDefault();
    var getData = new FormData(form);
    compareData(formData);
    
});
function compareData(formData){
    var genders = document.getElementById("gender");
    if( document.myForm.year.value == "" ) {
       alert( "Please provide a valid year of birth" );
       
      
    }
    else if( document.myForm.month.value == ""){
       alert( "Please provide your month of birth!" ); 
    }
    else if( document.myForm.date.value == "") {
       alert( "Please provide a valid date" );
      
      
    }
    else if(genders[0].checked==false && genders[1].checked==false ) {
        alert("You must select male or female");
       
    }   
    else{
     
    }
  
  }


function calculateDayValue(){
    year = document.getElementById(year).value;
    CC =
    YY =
    MM =
    DD =
    d 
}


  function handleForm(event) {
    event.preventDefault(); 
  } 
form.addEventListener('submit', handleForm);
function myFunction(){

}

function findName(){
    dayValue = calculateDayValue();
    getGender();

}
