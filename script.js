var appForm = document.querySelector("#app form");

appForm.onsubmit = avaliacion;

function avaliacion(e){
	e.preventDefault();
  var input_pessimo = document.getElementById("input_pessimo").value;
  var input_mediano = document.getElementById("input_mediano").value;
  var input_otimo = document.getElementById("input_otimo").value;
  var result = document.getElementById("result");

  if(input_pessimo = Péssimo){
var result = parseFloat(input_pessimo);
  }
  if(input_otimo = Ótimo) {
    var result = parseFloat(input_otimo);
  }
  else {
    var result = parseFloat(input_mediano);
  }
  result.innerHTML = result;
}