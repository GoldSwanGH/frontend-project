const downloadToFile = (content, filename, contentType) => {
    const a = document.createElement('a');
    const file = new Blob([content], {type: contentType});
    
    a.href= URL.createObjectURL(file);
    a.download = filename;
    a.click();
  
      URL.revokeObjectURL(a.href);
};

let level1 = [["с глухой согласной на конце", "с звонкой согласной на конце"],
["с буквой С в начале", "с буквой З в начале"]];

let level2 = [["с удвоенной буквой", "без удвоенной буквы"],
["с буквой Ё после Ч, Ж, Ш или Щ", "с буквой О после Ч, Ж, Ш или Щ"],
["с твердым знаком", "с мягким знаком"]];

let level3 = [["1-го склонения", "НЕ 1-го склонения"],
["2-го склонения", "НЕ 2-го склонения"],
["3-го склонения", "НЕ 3-го склонения"]];

let area = document.getElementById("area");
let data = JSON.parse(localStorage.getItem("user"));
area.innerHTML = "Имя игрока: " + data.name + "<br>Неправильных ответов: " + data.mistakes + "<br>Общее время: " + Math.floor(data.time/60) + " мин. " + (Math.round((data.time % 60)*10) / 10) + " сек.";

document.querySelector('#btnSave').addEventListener('click', () => {
    let user = JSON.parse(localStorage.getItem("user"));
    let time = Math.floor(user.time/60) + " мин. " + (Math.round((user.time % 60)*10) / 10) + " сек.";
    let textArea = "Имя игрока: " + user.name + "\nНеправильных ответов: " + user.mistakes + "\nОбщее время: " + time;

    let text = "Выберите все слова ";

    let task = user.level1.slice(0, 1);
    let variant = user.level1.slice(2);
    time = Math.floor(user.level1Time/60) + " мин. " + (Math.round((user.level1Time % 60)*10) / 10) + " сек.";
    textArea += "\nЗадание уровня 1: " + text + level1[task][variant] + "\nВремя на уровень 1: " + time + "\nОшибок на уровне 1: " + user.level1mistakes;


    task = user.level2.slice(0, 1);
    variant = user.level2.slice(2); 
    time = Math.floor((user.level2Time - user.level1Time)/60) + " мин. " + (Math.round(((user.level2Time - user.level1Time) % 60)*10) / 10) + " сек.";
    textArea += "\nЗадание уровня 2: " + text + level2[task][variant] + "\nВремя на уровень 2: " + time + "\nОшибок на уровне 2: " + user.level2mistakes;


    task = user.level3.slice(0, 1);
    variant = user.level3.slice(2);
    time = Math.floor((user.level3Time - user.level2Time)/60) + " мин. " + (Math.round(((user.level3Time - user.level2Time) % 60)*10) / 10) + " сек.";
    textArea += "\nЗадание уровня 3: " + text + level3[task][variant] + "\nВремя на уровень 3: " + time + "\nОшибок на уровне 3: " + user.level3mistakes;

    let grade;
    if((1000 - user.time - mistakes * 70) > 0){
        grade = 1000 - user.time - mistakes * 70;
    }
    else{
        grade = 0;
    }
    
    textArea += "\nОбщий балл: " + grade + " (из 10)";

    downloadToFile(textArea, 'result.txt', 'text/plain');
  });