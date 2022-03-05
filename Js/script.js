let heading = "Akan";
document.title = "Akan";



// var form = document.getElementById("form");
// var year  = document.getElementById("year");
// var month = document.getElementById("month");
// var  male = document.getElementById("male");
// var female = document.getElementById("female");
// // function handleForm(event) {
// //     event.preventDefault(); 
// //   } 
// // form.addEventListener('submit', handleForm);
// function myFunction(){
    
// var  = document.getElementsByName("myForm");
// if( document.myForm.year.value == "" || document.myForm.year.value.length !=4) {
//    alert( "Please provide a valid" );
//    document.myForm.year.focus() ;
//    return false;
// }else if( month.value == "" || isNaN( document.myForm.month.value ) || 
// document.myForm.month.value.length != 2 ){
//  alert( "Please provide your month" );
//    document.myForm.month.focus() ;
//    return false;

// }
// }

var CC, YY, MM, DD, d, dayValue;
var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

let form = document.getElementById("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var getData = new FormData(form);
    compareData(formData);
    
});
function compareData(formData){
    var genders = document.getElementById("gender");
    if( document.myForm.year.value == "") {
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
  function handleForm(event) {
    event.preventDefault(); 
  } 
form.addEventListener('submit', handleForm);
function myFunction(){

}
