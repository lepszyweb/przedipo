function localdate(){
  var now = new Date();
  var days = new Array('Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota');
  var months = new Array('stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia');
  var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();
  function fourdigits(number)	{
    return (number < 1000) ? number + 1900 : number;
  }
  var today =  "&nbsp;" + days[now.getDay()] + " " + date + " " + months[now.getMonth()] + " " + (fourdigits(now.getYear())) + ", Przejaśnienia, 23&deg;C"
  var tochange = document.createElement("span"); tochange.innerHTML = today;
  document.getElementById("weather").replaceChild(tochange, document.getElementById("weather").lastChild);
}
addLoadEvent(localdate);