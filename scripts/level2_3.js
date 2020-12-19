function randomInt(min, max) { // включая min и max
    return;
}
function pseudoRandomInt(min, max, lastRandom1, lastRandom2) { // включая min и max
    let random;
    do{
        random =  min + Math.floor((max + 1 - min) * Math.random());
        console.log(random);
    }while(lastRandom1 == random || lastRandom2 == random);
    return random;
}

let sections = document.getElementsByClassName("section");
let positions = ["flex-start", "center", "flex-end"];
let lastJustify = [];
let lastAlign = [];

for (let i = 0; i < sections.length; i++){
    if (i < 5){
        let random;
        if (i == 0){
            random = pseudoRandomInt(0, 2, -1, -1);
        }
        else{
            random = pseudoRandomInt(0, 2, lastJustify[i - 1], -1);
        }
        lastJustify[i] = random;
        sections.item(i).style.justifyContent = positions[random];
        if (i == 0){
            random = pseudoRandomInt(0, 2, -1, -1);
        }
        else{
            random = pseudoRandomInt(0, 2, lastAlign[i - 1], -1);
        }
        lastAlign[i] = random;
        sections.item(i).style.alignItems = positions[random];
    }
    else{
        let random = pseudoRandomInt(0, 2, lastJustify[i - 1], lastJustify[i - 5]);
        lastJustify[i] = random;
        sections.item(i).style.justifyContent = positions[random];
        random = pseudoRandomInt(0, 2, lastAlign[i - 1], lastAlign[i - 5]);
        lastAlign[i] = random;
        sections.item(i).style.alignItems = positions[random];
    }
    console.log("section "+ i + " justify-content: " + sections.item(i).style.justifyContent);
    console.log("section "+ i + " align-items: " + sections.item(i).style.alignItems);
}