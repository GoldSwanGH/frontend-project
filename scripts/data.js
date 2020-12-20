let input = document.getElementById("input");
let start = document.getElementsByClassName("action").item(0);

function Data(name, mistakes, time){
    this.name = name;
    this.mistakes = mistakes;
    this.time = time;
}

function store(){
    let data = new Data(input.value, 0, 0);
    let str = JSON.stringify(data);
    localStorage.setItem("user", str);
}

start.addEventListener("click", store)