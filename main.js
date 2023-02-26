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

let x = 0;
setInterval(()=>{
    if(x > 2){
        x = 0;
    }
        switch(x){
            case 0:
                document.getElementById("portImage").src = "./me.JPG";
                break;
            case 1:
                document.getElementById("portImage").src = "./me2.JPG";
                break;
            case 2:
                document.getElementById("portImage").src = "./vini.JPG";
                break;
        }
    x++;
    
},5000);
  
function displayStuff(obj){

    let toDisplay = document.getElementById(obj);
    if(toDisplay.style.display === 'none'){
        toDisplay.style.display = "block";

    }
    else{
        toDisplay.style.display = "none";
    }
    
}


