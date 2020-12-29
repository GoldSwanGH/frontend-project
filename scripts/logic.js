let content = document.getElementsByClassName("content").item(0);
let aside = document.createElement("div");
aside.classList.add("aside");
let text = document.createElement("p");
text.classList.add("text");
text.innerHTML = "Выберите все слова ";
let currentTheme = JSON.parse(localStorage.getItem("theme"));


let images = document.getElementsByClassName("pic_content");
let PicsCount = images.length; // от 1 до (PicsCount / 2) + 1
let level1 = [["с глухой согласной на конце", "с звонкой согласной на конце"],
["с буквой С в начале", "с буквой З в начале"]];
let level1Index = [0, 1, 2, 3];

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

    if (trueCount > truePics.length){
        trueCount = randomInt(1, truePics.length);
        if (trueCount != truePics.length){
            truePics.splice(trueCount, truePics.length - trueCount);
        }
        falseCount = PicsCount - trueCount;
    }
    
    let ctr = 0;
    while (falsePics.length < falseCount){
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

    if (trueCount > truePics.length){
        trueCount = randomInt(1, truePics.length);
        if (trueCount != truePics.length){
            truePics.splice(trueCount, truePics.length - trueCount);
        }
        falseCount = PicsCount - trueCount;
    }
    
    let ctr = 0;
    while (falsePics.length < falseCount){
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


function pseudoRandomInt(min, max, lvl_1, lvl0) { // включая min и max
    let random1;
    let random2;
    let output;
    oldTask1 = Number(lvl_1.slice(0, 1));
    oldVariant1 = Number(lvl_1.slice(2));
    oldTask2 = Number(lvl0.slice(0, 1));
    oldVariant2 = Number(lvl0.slice(2));
    do{
        random1 =  min + Math.floor((max + 1 - min) * Math.random());
        random2 =  min + Math.floor((max + 1 - min) * Math.random()); 
        output = String(random1) + " " + String(random2);
    }while(lvl_1 == output || lvl0 == output);
    return output;
}

let user = JSON.parse(localStorage.getItem("user"));

let level;
let truePics = [];
let falsePics = [];
let fillingPics = [];
let trueIDs = [];
let task;
let taskIndex;
let variant = randomInt(0, 1);
let oldTask;
let oldVariant;
let full;

switch(PicsCount){
    case 6:
        level = 1;
        if(user.level1_state == undefined){
            task = randomInt(0, level1.length - 1);
            break;
        }
        if(user.level1_state == -1){
            full = pseudoRandomInt(0, level1.length - 1, user.level_1, "-1 -1"); //добавить псевдорандом на основе уже выпавших значений
            task = full.slice(0, 1);
            variant = full.slice(2);
            break;
        }
        if(user.level1_state == 0){
            full = pseudoRandomInt(0, level1.length - 1, user.level_1, user.level0);
            task = full.slice(0, 1);
            variant = full.slice(2);
            break;
        }
    case 10:
        level = 2;
        task = randomInt(0, level2.length - 1);
        break;
    case 14:
        level = 3;
        task = randomInt(0, level3.length - 1);
        break;
}

if(level == 1 && user.level1_state == undefined){
    if(user.level_1 == undefined){
        full = String(task) + " " + String(variant);
        user.level_1 = full;
    }
    else{
        full = user.level_1;
        task = user.level_1.slice(0, 1);
        variant = user.level_1.slice(2);
    }
}
if(level == 1 && user.level1_state == -1){
    if(user.level0 == undefined){
        user.level0 = full;
    }
    else{
        full = user.level0;
        task = user.level0.slice(0, 1);
        variant = user.level0.slice(2);
    }
}
if(level == 1 && user.level1_state == 0){
    if(user.level1 == undefined){
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
    text.innerHTML += "<br>";
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
if (level == 1 && user.level1_state == undefined){
    p.innerHTML = "Уровень 1 \n Задание 1";
}
else if (level == 1 && user.level1_state == -1){
    p.innerHTML = "Уровень 1 \n Задание 2";
}
else if (level == 1 && user.level1_state == 0){
    p.innerHTML = "Уровень 1 \n Задание 3";
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
counter.innerHTML = "Неправильных ответов: " + user.mistakes;
let timer = document.createElement("p");
timer.classList.add("text");
timer.id = "timer";
timer.innerHTML = "Время: " + Math.floor(user.time/60) + " мин. " + (Math.round((user.time % 60)*10) / 10) + " сек.";
aside.appendChild(counter);
aside.appendChild(timer);
aside.appendChild(text);
localStorage.setItem("user", JSON.stringify(user));
let anim;
let failureFlag = false;

function helper(flag){
    if (flag == true){
        return;
    }
    else{
        let help = document.createElement("img");
        help.src = "../img/help.png";
        help.classList.add("help");
        let box = document.createElement("div");
        box.classList.add("help_box");
        box.appendChild(help);
        aside.appendChild(box);
        //let hdr = document.getElementsByClassName("header").item(0);
        //hdr.classList.add("flex_header");
        //hdr.appendChild(help);
        return box;
    }
}

let help_box;

function check(){
    let selected = document.getElementsByClassName("selected");
    let data = JSON.parse(localStorage.getItem("user"));
    if (selected.length != trueIDs.length){
        data.mistakes++;
        counter.innerHTML = "Неправильных ответов: " + data.mistakes;
        localStorage.setItem("user", JSON.stringify(data));
        anim = document.getElementById('failure');
        anim.style.display = 'block';
        anim.classList.add('anim');
        button.removeEventListener("click", check);
        setTimeout(() => {
            anim.classList.remove('anim');
            anim.style.display = 'none';
            button.addEventListener("click", check);
        }, 4000);
        if (level == 3 && failureFlag == false){
            help_box = helper(failureFlag);
            failureFlag = true;
        }
        return;
    }
    for (let i = 0; i < selected.length; i++){
        if(selected.item(i).id != String(trueIDs[i])){
            data.mistakes++;
            counter.innerHTML = "Неправильных ответов: " + data.mistakes;
            localStorage.setItem("user", JSON.stringify(data));
            anim = document.getElementById('failure');
            anim.style.display = 'block';
            anim.classList.add('anim');
            button.removeEventListener("click", check);
            setTimeout(() => {
                anim.classList.remove('anim');
                anim.style.display = 'none';
                button.addEventListener("click", check);
            }, 4000);
            return;
        }
    }
    anim = document.getElementById('success');
    anim.style.display = 'block';
    anim.classList.add('anim');
    setTimeout(() => {
        anim.classList.remove('anim');
        anim.style.display = 'none';
    }, 4000);
    clearInterval(interval);
    let win = document.createElement("p");
    win.classList.add("head");
    win.innerHTML = "Молодец!";
    aside.appendChild(win);
    let elem = document.createElement("a");
    if (level == 1 && data.level1_state == undefined){
        data.level1_state = -1;
        elem.href = "../pages/level1.html";
        elem.innerHTML = "Продолжить";
    }
    else if (level == 1 && data.level1_state == -1){
        data.level1_state = 0;
        elem.href = "../pages/level1.html";
        elem.innerHTML = "Продолжить";
    }
    else if (level == 1 && data.level1_state == 0){
        data.level1Time = data.time;
        data.level1mistakes = data.mistakes;
        elem.href = "../pages/level2.html";
        elem.innerHTML = "Уровень 2";
    }
    else if (level == 2){
        data.level2Time = data.time;
        data.level2mistakes = data.mistakes - data.level1mistakes;
        elem.href = "../pages/level3.html";
        elem.innerHTML = "Уровень 3";
    }
    else if (level == 3){
        data.level3Time = data.time;
        data.level3mistakes = data.mistakes - data.level1mistakes - data.level2mistakes;
        let finalDate = new Date();
        let file = "result_" + data.name + '_' + finalDate.getHours() + 'h-' + finalDate.getMinutes() + "m.txt";
        data.fileName = file;
        elem.href = "../pages/final.html";
        elem.innerHTML = "Результаты";
    }
    if(failureFlag == true){
        help_box.remove();
    }
    elem.classList.add("press");
    elem.style.backgroundColor = currentTheme.buttonColor;
    elem.style.color = currentTheme.textColor;
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
button.style.backgroundColor = currentTheme.buttonColor;
button.style.color = currentTheme.textColor;
button.innerHTML = "Проверить!";


button.addEventListener("mouseup", unfocus);

content.appendChild(aside);

aside = document.getElementsByClassName("aside").item(0);

function repaint(theme){
    document.body.style.backgroundColor = theme.backColor;
    let header = document.getElementsByClassName("header").item(0);
    header.style.color = theme.textColor;
    let content = document.getElementsByClassName("content").item(0);
    content.style.color = theme.textColor;
}

repaint(currentTheme);

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
        win.innerHTML = " Уровень пройден!";
        aside.appendChild(win);
        let elem = document.createElement("a");
        elem.href = "../pages/level2.html";
        elem.innerHTML = "Уровень 2";
        elem.classList.add("press");
        elem.style.backgroundColor = currentTheme.buttonColor;
        elem.style.color = currentTheme.textColor;
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
        win.innerHTML = " Уровень пройден!";
        aside.appendChild(win);
        let elem = document.createElement("a");
        elem.href = "../pages/level3.html";
        elem.innerHTML = "Уровень 3";
        elem.classList.add("press");
        elem.style.backgroundColor = currentTheme.buttonColor;
        elem.style.color = currentTheme.textColor;
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
        win.innerHTML = " Уровень пройден!";
        aside.appendChild(win);
        let elem = document.createElement("a");
        elem.href = "../pages/final.html";
        elem.innerHTML = "Результаты";
        elem.classList.add("press");
        elem.style.backgroundColor = currentTheme.buttonColor;
        elem.style.color = currentTheme.textColor;
        let cont = document.createElement("div");
        cont.classList.add("press_container");
        cont.appendChild(elem);
        aside.appendChild(cont);
    }
}