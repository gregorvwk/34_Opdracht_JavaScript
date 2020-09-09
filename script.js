const huiswekMaken = function(vak, callback){
    console.log("Ok, ok, ik ga nu mijn " + vak + " huiswerk maken")
    setTimeout(() => {
    callback();
    }, 2000);
}

const klaarMetHuiswerk = function(){
    console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!")
}

huiswekMaken("wiskunde", klaarMetHuiswerk)

