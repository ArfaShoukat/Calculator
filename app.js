function abc(a) {
  document.getElementById("inpbox").value += a;


}
function eq() {
  var b = document.getElementById("inpbox");
  b.value = eval(b.value);
}
function clr() {
  document.getElementById("inpbox").value = "";
}
function dlt(){
  inpbox.value  = inpbox.value.slice(0, -1)
  
}