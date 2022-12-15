var maxmark=100; //total mark per subject
var sum=0; //total percent
function go(){
var ttl= document.querySelector("#totalsub").value; //ttl=total no. of sub
for (var i=1; i<=ttl;i++){
this["x"+i]=document.createElement("INPUT"); //this["x"+i] for dynamic variable
this["x"+i].setAttribute("type","Number");
this["x"+i].setAttribute("id",i);
this["x"+i].setAttribute("placeholder","enter yout marks for Subject -> "+i)
document.body.appendChild(this["x"+i]); //appending in body
}
var calc=document.createElement("INPUT");
calc.setAttribute("type","submit");
calc.setAttribute("value","Calculate");
calc.setAttribute("onclick","calc()");
document.body.appendChild(calc);
}
function calc(){
var ttl= document.querySelector("#totalsub").value;
for (var j=1; j<=ttl;j++){
var ttlmarks= document.getElementById(j).value;
sum+=parseInt(ttlmarks); //parseInt to convert str to int
}
var totalELem=document.createElement("P");
totalELem.setAttribute("ID","total-marks");
document.body.appendChild(totalELem);
totalELem.innerHTML="Total Percent :"+
((sum/(maxmark*ttl))*100).toFixed(2)+"%";
}
