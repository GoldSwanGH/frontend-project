let input = document.getElementById("input");
let start = document.getElementsByClassName("action").item(0);
let themes = document.getElementsByClassName("theme_bar");
let currentTheme =  JSON.parse(localStorage.getItem("theme"));

if(currentTheme != null){
    repaint(currentTheme);
}
else{
    currentTheme = new Colors("#FFFFFF", "rgb(163,141,101)", "rgb(194, 56, 56)");
    localStorage.setItem("theme", JSON.stringify(currentTheme));
}

function repaint(theme){
    document.body.style.backgroundColor = theme.backColor;
    let header = document.getElementsByClassName("header").item(0);
    header.style.color = theme.textColor;
    let content = document.getElementsByClassName("content").item(0);
    content.style.color = theme.textColor;
    let footer = document.getElementsByClassName("footer").item(0);
    footer.style.color = theme.textColor;
    let buttons = document.getElementsByClassName("press");
    for (let i = 0; i < buttons.length; i++){
        buttons.item(i).style.backgroundColor = theme.buttonColor;
        buttons.item(i).style.color = theme.textColor;
    }
}

function changeTheme(event){
    switch (event.currentTarget.id){
        case "marine":
            currentTheme = new Colors("black", "#33af90", "#4B4E6D");
            repaint(currentTheme);
            break;
        case "forest":
            currentTheme = new Colors("black", "#a4b632", "#8f9619");
            repaint(currentTheme);
            break;
        case "default":
            currentTheme =  new Colors("#FFFFFF", "rgb(163,141,101)", "rgb(194, 56, 56)");
            repaint(currentTheme);
            break;
        case "soft":
            currentTheme = new Colors("#ADF5FF", "#0075A2", "#481620");
            repaint(currentTheme);
            break;
        case "light":
            currentTheme = new Colors("black", "white", "grey");
            repaint(currentTheme);
            break;
    }
    localStorage.setItem("theme", JSON.stringify(currentTheme));
}

for(let i = 0; i < themes.length; i++){
    themes.item(i).addEventListener("click", changeTheme);
}

function Data(name, mistakes, time){
    this.name = name;
    this.mistakes = mistakes;
    this.time = time;
}

function Colors(textColor, backColor, buttonColor){
    this.textColor = textColor;
    this.backColor = backColor;
    this.buttonColor = buttonColor;
}

function store(){
    let data = new Data(input.value, 0, 0);
    let str = JSON.stringify(data);
    localStorage.setItem("user", str);
}

start.addEventListener("click", store);