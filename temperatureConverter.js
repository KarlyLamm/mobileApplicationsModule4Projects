function setup()
{
    document.getElementById("farenheit").onclick=
    function(){setUnits("C");};
    document.getElementById("celcius").onclick=
    function(){setUnits("F");};
}
function setUnits(unit)
{
    var label=document.getElementById("label");
    label.innerHTML="&deg; "+unit;
}
function convert()
{
    var celciusButton = document.getElementById("celcius");
    var temperature=document.getElementById("temperature");

    if(celciusButton.checked)
    {
        convertToCelcius(temperature.value);

    }
    else
    {
        convertToFarenheit(temperature.value);
    }
}
function convertToCelcius(temperatureInFarenheit)
{
    var celciusTemperature = (temperatureInFarenheit-32)*5/9;
    document.getElementById("answer").innerHTML=
        temperatureInFarenheit+"&deg; Farenheit converts to "+
         celciusTemperature.toFixed(1)+"&deg; Celcius";
}
function convertToFarenheit(temperatureInCelcius)
{
    varfarenheitTemperature = (temperatureInCelcius*9/5+32);
    document.getElementById("answer").innerHTML=
        temperatureInCelcius+"&deg; Celcius converts to "+
         celciusTemperature.toFixed(1)+"&deg; Farenheit";
}