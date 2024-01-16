function calculateTravelTime() {
  var masofa = parseFloat(document.getElementById("masofa").value);

  if (isNaN(masofa) || masofa <= 0) {
    alert("Masofani to'g'ri kiriting siz notogri km kiritidizgiz !");
    return;
  }

  var piyodatezligi = 3.6;
  var velosipedtezligi = 20.1;
  var mashinatezligi = 70;
  var Samalyottezligi = 800;

  var piyodavaqt = masofa / piyodatezligi;
  var velosipedvatq = masofa / velosipedtezligi;
  var mashinavaqt = masofa / mashinatezligi;
  var Samalyotvaqt = masofa / Samalyottezligi;

  displayResult("piyodaItem", piyodavaqt);
  displayResult("VelosopedItem", velosipedvatq);
  displayResult("mashinaItem", mashinavaqt);
  displayResult("Samalyotitem", Samalyotvaqt);
}

function displayResult(itemId, time) {
  var resultElement = document.getElementById(itemId);

  resultElement.innerHTML = formatTime(time);
}

function formatTime(time) {
  var soat = Math.floor(time);
  var minut = Math.floor((time % 1) * 60);
  var sekund = Math.round(((time % 1) * 60 - minut) * 60);

  return soat + " soat " + minut + " daqiqa " + sekund + " sekund";
}
