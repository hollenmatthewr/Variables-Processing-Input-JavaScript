var TotalEle = document.body.querySelector(".Total");
var TaxedEle = document.body.querySelector(".Taxed");

var Totalprompt = Number(prompt("How much was your bill?"));
var Taxedprompt = Totalprompt*.07; 
var Totaltaxedprompt = Totalprompt + Taxedprompt;
var Tipprompt = Totaltaxedprompt * .05;
var Totaltipprompt = Tipprompt + Totaltaxedprompt;


TotalEle.innerHTML= "Your original bill is" +Totalprompt;
TaxedEle.innerHTML= "Your bill after tax and tip is" +Totaltipprompt;