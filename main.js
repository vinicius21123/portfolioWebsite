const timeContainer = document.getElementById("timeProgrammed");
    const BIRTH_DAY = "10-22-2003";
    const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
    const intlNumberFormatter = new Intl.NumberFormat("en-UK");

setInterval((timeContainer) => {
    const now = new Date();
    const difference = Math.floor(
    (now.getTime() - BIRTH_DAY_DATE.getTime()) / 1000
    );

    document.getElementById("timeProgrammed").innerText = intlNumberFormatter.format(difference);
}, 1000);
  
function displayStuff(obj){

    let toDisplay = document.getElementById(obj);
    if(toDisplay.style.display === 'none'){
        toDisplay.style.display = "block";

    }
    else{
        toDisplay.style.display = "none";
    }
    
}


