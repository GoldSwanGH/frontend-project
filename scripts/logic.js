let content = document.getElementsByClassName("content").item(0);
let aside = document.createElement("div");
aside.classList.add("aside");
let text = document.createElement("p");
text.classList.add("text");
text.innerHTML = "Выберите все слова ";


let images = document.getElementsByClassName("pic_content");
let PicsCount = images.length; // от 1 до (PicsCount / 2) + 1
let level1 = [["с глухой буквой на конце", "с звонкой буквой на конце"],
["с буквой С в начале", "с буквой З в начале"]];

let level2 = [["с удвоенной буквой", "без удвоенной буквы"],
["с буквой Ё после Ч, Ж, Ш или Щ", "с буквой О после Ч, Ж, Ш или Щ"],
["с твердым знаком", "с мягким знаком"]];

let level3 = [["1-го склонения", "НЕ 1-го склонения"],
["2-го склонения", "НЕ 2-го склонения"],
["3-го склонения", "НЕ 3-го склонения"]];

// word - слово, src - путь до картинки, skl - склонение
function Picture(word, src, skl) {
    this.word = word;
    this.src = "../img/" + String(src);
    this.skl = skl;
}

let pics = [];

function addPicture(word, src, skl){
    let addedPic = new Picture(word, src, skl);
    pics.push(addedPic);
}

addPicture("коньки", "коньки.png", 0);
addPicture("кольцо", "кольцо.png", 2);
addPicture("компьютер", "компьютер.jpg", 2);
addPicture("объектив", "объектив.jpg", 2);
addPicture("печенье", "печенье.png", 2);
addPicture("подъезд", "подъезд.jpg", 2);
addPicture("ружьё", "ружьё.png", 2);
addPicture("бинт", "бинт.jpg", 2);
addPicture("глаз", "глаз.png", 2);
addPicture("гриб", "гриб.jpg", 2);
addPicture("дуб", "дуб.png", 2);
addPicture("зуб", "зуб.png", 2);
addPicture("лев", "лев.jpg", 2);
addPicture("молоток", "молоток.jpg", 2);
addPicture("рак", "рак.png", 2);
addPicture("сапог", "сапог.jpg", 2);
addPicture("суп", "суп.png", 2);
addPicture("утюг", "утюг.jpg", 2);
addPicture("флаг", "флаг.jpg", 2);
addPicture("хлеб", "хлеб.png", 2);
addPicture("шарф", "шарф.jpg", 2);
addPicture("шкаф", "шкаф.jpg", 2);
addPicture("забор", "забор.jpg", 2);
addPicture("замок", "замок.jpg", 2);
addPicture("заяц", "заяц.jpg", 2);
addPicture("звезда", "звезда.jpg", 1);
addPicture("зебра", "зебра.jpg", 1);
addPicture("земляника", "земляника.jpg", 1);
addPicture("зеркало", "зеркало.jpg", 2);
addPicture("змея", "змея.jpg", 1);
addPicture("зонт", "зонт.jpg", 2);
addPicture("самолет", "самолет.jpg", 2);
addPicture("санки", "санки.jpg", 0);
addPicture("слон", "слон.jpg", 2);
addPicture("снеговик", "снеговик.jpg", 2);
addPicture("собака", "собака.jpg", 1);
addPicture("жонглёр", "жонглёр.jpg", 2);
addPicture("дирижёр", "дирижёр.png", 2);
addPicture("жёлудь", "жёлудь.png", 2);
addPicture("крыжовник", "крыжовник.png", 2);
addPicture("пчёлы", "пчёлы.png", 0);
addPicture("расчёска", "расчёска.png", 1);
addPicture("сачок", "сачок.png", 2);
addPicture("сгущёнка", "сгущёнка.jpg", 1);
addPicture("тренажёр", "тренажёр.jpg", 2);
addPicture("щётка", "щётка.png", 1);
addPicture("шоколад", "шоколад.jpg", 2);
addPicture("шорты", "шорты.jpg", 0);
addPicture("овца", "овца.png", 1);
addPicture("рука", "рука.png", 1);
addPicture("семья", "семья.jpg", 1);
addPicture("гвоздь", "гвоздь.jpg", 2);
addPicture("ведро", "ведро.png", 2);
addPicture("лес", "лес.jpg", 2);
addPicture("волк", "волк.png", 2);
addPicture("воробей", "воробей.png", 2);
addPicture("солнце", "солнце.png", 2);
addPicture("мышь", "мышь.jpg", 3);
addPicture("рысь", "рысь.jpg", 3);
addPicture("сирень", "сирень.png", 3);
addPicture("бассейн", "бассейн.png", 2);
addPicture("ванна", "ванна.png", 1);
addPicture("дрессировщик", "дрессировщик.jpg", 2);
addPicture("колонна", "колонна.png", 1);
addPicture("коса", "коса.png", 1);
addPicture("кристалл", "кристалл.png", 2);
addPicture("пудинг", "пудинг.jpg", 2);
addPicture("троллейбус", "троллейбус.jpg", 2);
addPicture("лестница", "лестница.png", 1);
addPicture("единица", "единица.jpg", 1);
addPicture("пальцы", "пальцы.png", 0);
addPicture("курица", "курица.jpg", 1);
addPicture("мельница", "мельница.png", 1);
addPicture("ножницы", "ножницы.jpg", 0);
addPicture("пуговица", "пуговица.png", 1);
addPicture("огурцы", "огурцы.jpg", 0);
addPicture("синица", "синица.jpg", 1);
addPicture("яйцо", "яйцо.jpg", 2);
addPicture("ящерица", "ящерица.jpg", 1);






let picsIndexes = [];
for (let j = 0; j < pics.length; j++){
    picsIndexes.push(j);
}

function randomInt(min, max) { // включая min и max
    return min + Math.floor((max + 1 - min) * Math.random());
}

function fillImages(){
    let flag = false;
    let picIndex;
    let picIndexIndex;
    let trueCount = randomInt(1, (PicsCount / 2) + 1);
    let falseCount = PicsCount - trueCount;
    while((truePics.length + falsePics.length < PicsCount) && picsIndexes.length > 0){
        console.log("loop? truePics: " + truePics.length + " , trueCount: " + trueCount + " , falsePics: " + falsePics.length + " , falseCount: " + falseCount + " , pics left: " + picsIndexes.length);
        picIndexIndex = randomInt(0, picsIndexes.length - 1);
        picIndex = picsIndexes[picIndexIndex];
        flag = false;
        if (truePics.length < trueCount){
            flag = reg1.test(pics[picIndex].word);
            if (flag){
                //images.item(nextImageToFill).setAttribute('src', pics[picIndex].src);
                truePics.push(picIndex);
                picsIndexes.splice(picIndexIndex, 1);
            }
        }
        if (falsePics.length < falseCount && flag == false){
            flag = reg2.test(pics[picIndex].word);
            if(flag){
                //images.item(nextImageToFill).setAttribute('src', pics[picIndex].src);
                falsePics.push(picIndex);
                picsIndexes.splice(picIndexIndex, 1);
            }
        }
        if (flag == false){
            flag = reg1.test(pics[picIndex].word);
            if (flag == false){
                fillingPics.push(picIndex);
            }
            picsIndexes.splice(picIndexIndex, 1);
        }
    }

    if (truePics.length == 0){
        console.log("не нашлось картинок!");
    }

    if (trueCount > truePics.length){
        trueCount = randomInt(1, truePics.length);
        if (trueCount != truePics.length){
            truePics.splice(trueCount, truePics.length - trueCount);
        }
        falseCount = PicsCount - trueCount;
    }
    
    let ctr = 0;
    while (falsePics.length < falseCount){
        console.log("add...");
        falsePics.push(fillingPics[ctr]);
        ctr++;
    }
    picIndex = 0;
    for(let c = 0; c < PicsCount; c++){
        if (truePics.length != 0 && falsePics.length != 0){
            ctr = randomInt(1, PicsCount);
        }
        if(truePics.length == 0){
            ctr = PicsCount;
        }
        if(falsePics.length == 0){
            ctr = trueCount;
        }
        if (ctr <= trueCount){
            picIndex = truePics.pop();
            images.item(c).setAttribute('src', pics[picIndex].src);
            trueIDs.push(c+1);
        }
        if (ctr > trueCount){
            picIndex = falsePics.pop();
            images.item(c).setAttribute('src', pics[picIndex].src);
        }
    }
}

function fillImagesDouble(doubleFlag){
    let flag = false;
    let picIndex;
    let picIndexIndex;
    let trueCount = randomInt(1, (PicsCount / 2) + 1);
    let falseCount = PicsCount - trueCount;
    while((truePics.length + falsePics.length < PicsCount || truePics.length < trueCount) && picsIndexes.length > 0){ // условие норм?
        console.log("loop!");
        picIndexIndex = randomInt(0, picsIndexes.length - 1);
        picIndex = picsIndexes[picIndexIndex];
        flag = reg1.test(pics[picIndex].word);
        if (truePics.length < trueCount && flag){
            //images.item(nextImageToFill).setAttribute('src', pics[picIndex].src);
            truePics.push(picIndex);
            picsIndexes.splice(picIndexIndex, 1);
        }
        else if (!flag){
            //images.item(nextImageToFill).setAttribute('src', pics[picIndex].src);
            falsePics.push(picIndex);
            picsIndexes.splice(picIndexIndex, 1);
        }
    }

    if (truePics.length == 0){
        console.log("не нашлось картинок!");
    }

    if (trueCount > truePics.length){
        trueCount = randomInt(1, truePics.length);
        if (trueCount != truePics.length){
            truePics.splice(trueCount, truePics.length - trueCount);
        }
        falseCount = PicsCount - trueCount;
    }
    
    if (falseCount != falsePics.length){
        falsePics.splice(falseCount, falsePics.length - falseCount);
    }

    picIndex = 0;
    for(let c = 0; c < PicsCount; c++){
        if (truePics.length != 0 && falsePics.length != 0){
            ctr = randomInt(1, PicsCount);
        }
        if(truePics.length == 0){
            ctr = PicsCount;
        }
        if(falsePics.length == 0){
            ctr = trueCount;
        }
        if (ctr <= trueCount){
            picIndex = truePics.pop();
            images.item(c).setAttribute('src', pics[picIndex].src);
            if (doubleFlag){
                trueIDs.push(c+1);
            }
        }
        if (ctr > trueCount){
            picIndex = falsePics.pop();
            images.item(c).setAttribute('src', pics[picIndex].src);
            if (!doubleFlag){
                trueIDs.push(c+1);
            }
        }
    }
}

function fillImagesSkl(Skl, doubleFlag){
    let flag = false;
    let picIndex;
    let picIndexIndex;
    let trueCount = randomInt(1, (PicsCount / 2) + 1);
    let falseCount = PicsCount - trueCount;
    while((truePics.length + falsePics.length < PicsCount) && picsIndexes.length > 0){ // условие норм?
        console.log("loop~ Skl: " + Skl + " truePics: " + truePics.length + " , trueCount: " + trueCount + " , falsePics: " + falsePics.length + " , falseCount: " + falseCount + " , pics left: " + picsIndexes.length);
        picIndexIndex = randomInt(0, picsIndexes.length - 1);
        picIndex = picsIndexes[picIndexIndex];
        flag = false;
        if(pics[picIndex].skl == Skl){
            flag = true
        }
        if (truePics.length < trueCount && flag){
            //images.item(nextImageToFill).setAttribute('src', pics[picIndex].src);
            truePics.push(picIndex);
            picsIndexes.splice(picIndexIndex, 1);
        }
        else if (falsePics.length < falseCount && !flag && pics[picIndex].skl != 0){
            //images.item(nextImageToFill).setAttribute('src', pics[picIndex].src);
            falsePics.push(picIndex);
            picsIndexes.splice(picIndexIndex, 1);
        }
        else if (falsePics.length >= falseCount && !flag && pics[picIndex].skl != 0){
            //images.item(nextImageToFill).setAttribute('src', pics[picIndex].src);
            fillingPics.push(picIndex);
            picsIndexes.splice(picIndexIndex, 1);
        }
        else{
            picsIndexes.splice(picIndexIndex, 1);
            continue;
        }
    }

    if (truePics.length == 0){
        console.log("не нашлось картинок!");
    }

    if (trueCount > truePics.length){
        trueCount = randomInt(1, truePics.length);
        if (trueCount != truePics.length){
            truePics.splice(trueCount, truePics.length - trueCount);
        }
        falseCount = PicsCount - trueCount;
    }
    
    let ctr = 0;
    while (falsePics.length < falseCount){
        console.log("add...");
        falsePics.push(fillingPics[ctr]);
        ctr++;
    }

    picIndex = 0;
    for(let c = 0; c < PicsCount; c++){
        if (truePics.length != 0 && falsePics.length != 0){
            ctr = randomInt(1, PicsCount);
        }
        if(truePics.length == 0){
            ctr = PicsCount;
        }
        if(falsePics.length == 0){
            ctr = trueCount;
        }
        if (ctr <= trueCount){
            picIndex = truePics.pop();
            images.item(c).setAttribute('src', pics[picIndex].src);
            if (doubleFlag){
                trueIDs.push(c+1);
            }
        }
        if (ctr > trueCount){
            picIndex = falsePics.pop();
            images.item(c).setAttribute('src', pics[picIndex].src);
            if (!doubleFlag){
                trueIDs.push(c+1);
            }
        }
    }
}

let user = JSON.parse(localStorage.getItem("user"));

let level;
let truePics = [];
let falsePics = [];
let fillingPics = [];
let trueIDs = [];
let task;

switch(PicsCount){
    case 6:
        level = 1;
        task = randomInt(0, level1.length - 1);
        break;
    case 10:
        level = 2;
        task = randomInt(0, level2.length - 1);
        break;
    case 14:
        level = 3;
        task = randomInt(0, level3.length - 1);
        break;
}

console.log(user.level1);
let variant = randomInt(0, 1);
let full;
if(level == 1){
    if(user.level1 == undefined){
        full = String(task) + " " + String(variant);
        user.level1 = full;
    }
    else{
        full = user.level1;
        task = user.level1.slice(0, 1);
        variant = user.level1.slice(2);
    }
}
if(level == 2){
    if(user.level2 == undefined){
        full = String(task) + " " + String(variant);
        user.level2 = full;
    }
    else{
        full = user.level2;
        task = user.level2.slice(0, 1);
        variant = user.level2.slice(2);
    }
}
if(level == 3){
    if(user.level3 == undefined){
        full = String(task) + " " + String(variant);
        user.level3 = full;
    }
    else{
        full = user.level3;
        task = user.level3.slice(0, 1);
        variant = user.level3.slice(2);
    }
}

let reg;
let reg1;
let reg2;
let temp;

if (level == 1) {
    switch(full){
        case "0 0":
            reg1 = /^.*(п|ф|т|с|ш|к)$/i;
            reg2 = /^.*(б|в|д|з|ж|г)$/i;
            fillImages();
            break;
        case "0 1":
            reg1 = /^.*(б|в|д|з|ж|г)$/i;
            reg2 = /^.*(п|ф|т|с|ш|к)$/i;
            fillImages();
            break;
        case "1 0":
            reg1 = /^с.*$/i;
            reg2 = /^з.*$/i;
            fillImages();
            break;
        case "1 1":
            reg1 = /^з.*$/i;
            reg2 = /^с.*$/i;
            fillImages();
            break;
    }
    text.innerHTML += level1[task][variant];
}
else if (level == 2) {
    switch(full){
        case "0 0":
            reg1 = /^.*(.)\1.*$/i;
            fillImagesDouble(true);
            break;
        case "0 1":
            reg1 = /^.*(.)\1.*$/i;
            fillImagesDouble(false);
            break;
        case "1 0":
            reg1 = /^.*(ч|ж|ш|щ)ё.*$/i;
            reg2 = /^.*(ч|ж|ш|щ)о.*$/i;
            fillImages();
            break;
        case "1 1":
            reg1 = /^.*(ч|ж|ш|щ)о.*$/i;
            reg2 = /^.*(ч|ж|ш|щ)ё.*$/i;
            fillImages();
            break;
        case "2 0":
            reg1 = /^.*ъ.*$/i;
            reg2 = /^.*ь.*$/i;
            fillImages();
            break;
        case "2 1":
            reg1 = /^.*ь.*$/i;
            reg2 = /^.*ъ.*$/i;
            fillImages();
            break;
    }
    text.innerHTML += level2[task][variant];
}
else if (level == 3) {
    let Skl;
    switch(full){
        case "0 0":
            fillImagesSkl(1, true);
            break;
        case "0 1":
            fillImagesSkl(1, false);
            break;
        case "1 0":
            fillImagesSkl(2, true);
            break;
        case "1 1":
            fillImagesSkl(2, false);
            break;
        case "2 0":
            fillImagesSkl(3, true);
            break;
        case "2 1":
            fillImagesSkl(3, false);
            break;
    }
    text.innerHTML += level3[task][variant];
}

/*

^с.*$ - регулярка для буквы С в начале
^з.*$ - для З в начале
^.*(б|в|д|з|ж|г)$ - для звонкой на конце
^.*(п|ф|т|с|ш|к)$ - для глухой на конце
^.*(.)\1.*$ - для удвоенной
^.*(ч|ж|ш|щ)ё.*$ - для Ё после Ж, Ш, Щ
^.*(ч|ж|ш|щ)о.*$ - для О после Ж, Ш, Щ
^.*ь.*$ - для мягкого знака
^.*ъ.*$ - для твердого знака

*/

let press = document.getElementsByClassName("pic");

function deselect(event){
    event.currentTarget.classList.remove("selected");
    event.currentTarget.addEventListener("click", select, {once : true});
}

function select(event){
    event.currentTarget.classList.add("selected");
    event.currentTarget.addEventListener("click", deselect, {once : true});
}

for (let x = 0; x < press.length; x++){
    press.item(x).addEventListener("click", select, {once : true});
}

let p = document.createElement("p");
p.classList.add("head");
if (level == 1){
    p.innerHTML = "Уровень 1";
}
else if (level == 2){
    p.innerHTML = "Уровень 2";
}
else if (level == 3){
    p.innerHTML = "Уровень 3";
}
aside.appendChild(p);
let counter = document.createElement("p");
counter.classList.add("text");
counter.id = "counter";
counter.innerHTML = "Счетчик ошибок: " + user.mistakes;
let timer = document.createElement("p");
timer.classList.add("text");
timer.id = "timer";
timer.innerHTML = "Время: " + Math.floor(user.time/60) + " мин. " + (Math.round((user.time % 60)*10) / 10) + " сек.";
aside.appendChild(counter);
aside.appendChild(timer);
aside.appendChild(text);
localStorage.setItem("user", JSON.stringify(user));

function check(){
    let selected = document.getElementsByClassName("selected");
    console.log(selected.length);
    console.log(trueIDs.length);
    let data = JSON.parse(localStorage.getItem("user"));
    if (selected.length != trueIDs.length){
        data.mistakes++;
        counter.innerHTML = "Счетчик ошибок: " + data.mistakes;
        localStorage.setItem("user", JSON.stringify(data));
        return;
    }
    for (let i = 0; i < selected.length; i++){
        if(selected.item(i).id != String(trueIDs[i])){
            data.mistakes++;
            counter.innerHTML = "Счетчик ошибок: " + data.mistakes;
            console.log(selected.item(i).id);
            console.log(trueIDs[i]);
            localStorage.setItem("user", JSON.stringify(data));
            return;
        }
    }
    alert("правильно!");
    clearInterval(interval);
    let win = document.createElement("p");
    win.classList.add("head");
    win.innerHTML = "Уровень пройден!";
    aside.appendChild(win);
    let elem = document.createElement("a");
    if (level == 1){
        data.level1Time = data.time;
        elem.href = "../pages/level2.html";
        elem.innerHTML = "Уровень 2";
    }
    if (level == 2){
        data.level2Time = data.time;
        elem.href = "../pages/level3.html";
        elem.innerHTML = "Уровень 3";
    }
    if (level == 3){
        data.level3Time = data.time;
        elem.href = "../pages/final.html";
        elem.innerHTML = "Результаты";
    }
    elem.classList.add("press");
    let cont = document.createElement("div");
    cont.classList.add("press_container");
    cont.appendChild(elem);
    let targ = document.getElementsByClassName("aside").item(0);
    targ.appendChild(cont);
    localStorage.setItem("user", JSON.stringify(data));
    button.removeEventListener("click", check);
    button.remove();

}


function unfocus(event){
    event.currentTarget.blur();
}
let interval;
let button = document.createElement("button");
button.type = "button";
button.classList.add("press");
button.innerHTML = "Проверить!";


button.addEventListener("mouseup", unfocus);

content.appendChild(aside);

aside = document.getElementsByClassName("aside").item(0);

let div = document.createElement("div");
div.classList.add("press_container");
div.appendChild(button);
aside.appendChild(div);
let kuda = JSON.parse(localStorage.getItem("user"));
if(level == 1){
    if(kuda.level1Time == undefined){
        button.addEventListener("click", check);
        interval = setInterval(() =>{
            let drug = JSON.parse(localStorage.getItem("user"));
            drug.time += 1;
            timer.innerHTML = "Время: " + Math.floor(drug.time/60) + " мин. " + (Math.round((drug.time % 60)*10) / 10) + " сек.";
            localStorage.setItem("user", JSON.stringify(drug));
        }, 1000);
    }
    else{
        button.remove();
        let win = document.createElement("p");
        win.classList.add("head");
        win.innerHTML = "Уровень пройден!";
        aside.appendChild(win);
        let elem = document.createElement("a");
        elem.href = "../pages/level2.html";
        elem.innerHTML = "Уровень 2";
        elem.classList.add("press");
        let cont = document.createElement("div");
        cont.classList.add("press_container");
        cont.appendChild(elem);
        aside.appendChild(cont);
    }
}
if(level == 2){
    if(kuda.level2Time == undefined){
        button.addEventListener("click", check);
        interval = setInterval(() =>{
            let drug = JSON.parse(localStorage.getItem("user"));
            drug.time += 1;
            timer.innerHTML = "Время: " + Math.floor(drug.time/60) + " мин. " + (Math.round((drug.time % 60)*10) / 10) + " сек.";
            localStorage.setItem("user", JSON.stringify(drug));
        }, 1000);
    }
    else{
        button.remove();
        let win = document.createElement("p");
        win.classList.add("head");
        win.innerHTML = "Уровень пройден!";
        aside.appendChild(win);
        let elem = document.createElement("a");
        elem.href = "../pages/level3.html";
        elem.innerHTML = "Уровень 3";
        elem.classList.add("press");
        let cont = document.createElement("div");
        cont.classList.add("press_container");
        cont.appendChild(elem);
        aside.appendChild(cont);
    }
}
if(level == 3){
    if(kuda.level3Time == undefined){
        button.addEventListener("click", check);
        interval = setInterval(() =>{
            let drug = JSON.parse(localStorage.getItem("user"));
            drug.time += 1;
            timer.innerHTML = "Время: " + Math.floor(drug.time/60) + " мин. " + (Math.round((drug.time % 60)*10) / 10) + " сек.";
            localStorage.setItem("user", JSON.stringify(drug));
        }, 1000);
    }
    else {
        button.remove();
        let win = document.createElement("p");
        win.classList.add("head");
        win.innerHTML = "Уровень пройден!";
        aside.appendChild(win);
        let elem = document.createElement("a");
        elem.href = "../pages/final.html";
        elem.innerHTML = "Результаты";
        elem.classList.add("press");
        let cont = document.createElement("div");
        cont.classList.add("press_container");
        cont.appendChild(elem);
        aside.appendChild(cont);
    }
}
/*
let user = JSON.parse(localStorage.getItem("user"));

console.log(user.mistakes);
*/
