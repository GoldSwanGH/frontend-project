let content = document.getElementsByClassName("content").item(0);
let aside = document.createElement("div");
aside.classList.add("aside");
let p = document.createElement("p");
p.innerHTML = "Уровень 1";
let text = document.createElement("p");
text.innerHTML = "Выберите слова ";
aside.appendChild(p);



let images = document.getElementsByClassName("pic_content");
let PicsCount = images.length; // от 1 до (PicsCount / 2) + 1
let level1 = [["с глухой буквой на конце", "с звонкой буквой на конце"],
["с буквой С в начале", "с буквой З в начале"]];

let level2 = [["с удвоенной буквой", "без удвоенной буквы"],
["с буквой Ё после Ж, Ш или Щ", "с буквой О после Ж, Ш или Щ"],
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
addPicture("кольцо", "кольцо.png", 0);
addPicture("компьютер", "компьютер.jpg", 0);
addPicture("объектив", "объектив.jpg", 0);
addPicture("печенье", "печенье.png", 0);
addPicture("подъезд", "подъезд.jpg", 0);
addPicture("ружьё", "ружьё.png", 0);
addPicture("бинт", "бинт.jpg", 0);
addPicture("глаз", "глаз.png", 0);
addPicture("гриб", "гриб.jpg", 0);
addPicture("дуб", "дуб.png", 0);
addPicture("зуб", "зуб.png", 0);
addPicture("лев", "лев.jpg", 0);
addPicture("молоток", "молоток.jpg", 0);
addPicture("рак", "рак.png", 0);
addPicture("сапог", "сапог.jpg", 0);
addPicture("суп", "суп.png", 0);
addPicture("утюг", "утюг.jpg", 0);
addPicture("флаг", "флаг.jpg", 0);
addPicture("хлеб", "хлеб.png", 0);
addPicture("шарф", "шарф.jpg", 0);
addPicture("шкаф", "шкаф.jpg", 0);
addPicture("забор", "забор.jpg", 0);
addPicture("замок", "замок.jpg", 0);
addPicture("заяц", "заяц.jpg", 0);
addPicture("звезда", "звезда.jpg", 0);
addPicture("зебра", "зебра.jpg", 0);
addPicture("земляника", "земляника.jpg", 1);
addPicture("зеркало", "зеркало.jpg", 0);
addPicture("змея", "змея.jpg", 0);
addPicture("зонт", "зонт.jpg", 0);
addPicture("самолет", "самолет.jpg", 0);
addPicture("санки", "санки.jpg", 0);
addPicture("слон", "слон.jpg", 0);
addPicture("снеговик", "снеговик.jpg", 0);
addPicture("собака", "собака.jpg", 0);
addPicture("жонглёр", "жонглёр.jpg", 0);
addPicture("дирижёр", "дирижёр.png", 0);
addPicture("жёлудь", "жёлудь.png", 0);
addPicture("крыжовник", "крыжовник.png", 0);
addPicture("пчёлы", "пчёлы.png", 0);
addPicture("расчёска", "расчёска.png", 0);
addPicture("сачок", "сачок.png", 0);
addPicture("сгущёнка", "сгущёнка.jpg", 0);
addPicture("тренажёр", "тренажёр.jpg", 0);
addPicture("щётка", "щётка.png", 0);
addPicture("шоколад", "шоколад.jpg", 0);
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
addPicture("бассейн", "бассейн.jpg", 0);
addPicture("ванна", "ванна.png", 0);
addPicture("дрессировщик", "дрессировщик.jpg", 0);
addPicture("колонна", "колонна.png", 0);
addPicture("коса", "коса.png", 0);
addPicture("кристалл", "кристалл.jpg", 0);
addPicture("пудинг", "пудинг.jpg", 0);
addPicture("троллейбус", "троллейбус.jpg", 0);
addPicture("лестница", "лестница.png", 0);
addPicture("единица", "единица.jpg", 0);
addPicture("пальцы", "пальцы.png", 0);
addPicture("курица", "курица.jpg", 0);
addPicture("мельница", "мельница.png", 0);
addPicture("ножницы", "ножницы.jpg", 0);
addPicture("пуговица", "пуговица.png", 0);
addPicture("огурцы", "огурцы.jpg", 0);
addPicture("синица", "синица.jpg", 0);
addPicture("яйцо", "яйцо.jpg", 0);
addPicture("ящерица", "ящерица.jpg", 0);






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
    while((truePics.length + falsePics.length != PicsCount) && picsIndexes.length != 0){
        picIndexIndex = randomInt(0, picsIndexes.length - 1);
        picIndex = picsIndexes[picIndexIndex];
        flag = false;
        if (truePics.length != trueCount){
            flag = reg1.test(pics[picIndex].word);
            if (flag){
                //images.item(nextImageToFill).setAttribute('src', pics[picIndex].src);
                truePics.push(picIndex);
                picsIndexes.splice(picIndexIndex, 1);
            }
        }
        if (falsePics.length != falseCount && flag == false){
            flag = reg2.test(pics[picIndex].word);
            if(flag){
                //images.item(nextImageToFill).setAttribute('src', pics[picIndex].src);
                falsePics.push(picIndex);
                picsIndexes.splice(picIndexIndex, 1);
            }
        }
        if (falsePics.length != falseCount && flag == false){
            fillingPics.push(picIndex);
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

function fillImagesDouble(){
    let flag = false;
    let nextImageToFill = 0;
    picsIndexes = [];
    for (let k = 0; k < pics.length; k++) {
        if (pics[k].double == true) {
            picsIndexes.push(k);
        }
    }
    while ((truePics.length + falsePics.length != PicsCount) && picsIndexes.length != 0 && nextImageToFill - 1 != PicsCount) {

        picIndexIndex = randomInt(0, picsIndexes.length - 1);
        picIndex = picsIndexes[picIndexIndex];
        flag = reg.test(pics[picIndex].word);
        if (truePics.length != trueCount) {
            if (flag) {
                images.item(nextImageToFill).setAttribute('src', pics[picIndex].src);
                truePics.push(nextImageToFill);
                nextImageToFill++;
                picsIndexes.splice(picIndexIndex, 1);
            }
        }
        if (falsePics.length != falseCount && flag == false) {
            images.item(nextImageToFill).setAttribute('src', pics[picIndex].src);
            falsePics.push(nextImageToFill);
            nextImageToFill++;
            picsIndexes.splice(picIndexIndex, 1);
        }
    }
}

function fillImagesSkl(){
    let flag = false;
    let nextImageToFill = 0;
    picsIndexes = [];
    for (let k = 0; k < pics.length; k++) {
        if (pics[k].skl != 0) {
            picsIndexes.push(k);
        }
    }
    while ((truePics.length + falsePics.length != PicsCount) && picsIndexes.length != 0 && nextImageToFill - 1 != PicsCount) {

        picIndexIndex = randomInt(0, picsIndexes.length - 1);
        picIndex = picsIndexes[picIndexIndex];
        flag = false;
        if (pics[picIndex].skl == Skl){
            flag = true;
        }
        if (truePics.length != trueCount) {
            if (flag) {
                images.item(nextImageToFill).setAttribute('src', pics[picIndex].src);
                truePics.push(nextImageToFill);
                nextImageToFill++;
                picsIndexes.splice(picIndexIndex, 1);
            }
        }
        if (falsePics.length != falseCount && flag == false) {
            images.item(nextImageToFill).setAttribute('src', pics[picIndex].src);
            falsePics.push(nextImageToFill);
            nextImageToFill++;
            picsIndexes.splice(picIndexIndex, 1);
        }
    }
}

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

let variant = randomInt(0, 1);
let full = String(task) + " " + String(variant);
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
            reg = /^.*(.)\1.*$/i;
            fillImagesDouble();
            break;
        case "0 1":
            reg = /^.*(.)\1.*$/i;
            fillImagesDouble();
            temp = truePics;
            truePics = falsePics;
            falsePics = truePics;
            break;
        case "1 0":
            reg1 = /^.*(ж|ш|щ)ё.*$/i;
            reg2 = /^.*(ж|ш|щ)о.*$/i;
            fillImages();
            break;
        case "1 1":
            reg1 = /^.*(ж|ш|щ)о.*$/i;
            reg2 = /^.*(ж|ш|щ)ё.*$/i;
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
            Skl = 1;
            fillImagesSkl();
            break;
        case "0 1":
            Skl = 1;
            fillImagesSkl();
            temp = truePics;
            truePics = falsePics;
            falsePics = truePics;
            break;
        case "1 0":
            Skl = 2;
            fillImagesSkl();
            break;
        case "1 1":
            Skl = 2;
            fillImagesSkl();
            temp = truePics;
            truePics = falsePics;
            falsePics = truePics;
            break;
        case "2 0":
            Skl = 3;
            fillImagesSkl();
            break;
        case "2 1":
            Skl = 3;
            fillImagesSkl();
            temp = truePics;
            truePics = falsePics;
            falsePics = truePics;
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
^.*(ж|ш|щ)ё.*$ - для Ё после Ж, Ш, Щ
^.*(ж|ш|щ)о.*$ - для О после Ж, Ш, Щ
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

aside.appendChild(text);

let mistakes = 0;

function check(){
    let selected = document.getElementsByClassName("selected");
    console.log(selected.length);
    console.log(trueIDs.length);
    if (selected.length != trueIDs.length){
        mistakes++;
        alert("неправильно!");
        return;
    }
    for (let i = 0; i < selected.length; i++){
        if(selected.item(i).id != String(trueIDs[i])){
            mistakes++;
            alert("неправильно!");
            console.log(selected.item(i).id);
            console.log(trueIDs[i]);
            return;
        }
    }
    alert("правильно!");
}


function unfocus(event){
    event.currentTarget.blur();
}

let button = document.createElement("button");
button.type = "button";
button.classList.add("press");
button.innerHTML = "Проверить!";
button.addEventListener("click", check);
button.addEventListener("mouseup", unfocus);

content.appendChild(aside);

aside = document.getElementsByClassName("aside").item(0);

aside.appendChild(button);


