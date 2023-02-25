function displayStuff(obj){
    let toDisplay = document.getElementById(obj);
    if(toDisplay.style.display === 'none'){
        toDisplay.style.display = "block";
    }
    else{
        toDisplay.style.display = "none";
    }
    
}
