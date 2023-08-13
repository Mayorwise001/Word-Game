const words = [
    {
        name : "ohevr" ,
        'answer' : ["hover", "over"],



},
    {

        name: "ediug",
        'answer' : ["guide", "over"],
    },

    {
        name: "yrtounc",
        'answer' : ["country", "try"],
},
    {
        name : "gerit",
        'answer' : ["tiger", "gerti"],
    }

]


//word constructor
class Word  {
constructor(response){
    this.response = response;

    this.clear()
}

clear(){
    this.respond = '';
    this.response.textContent = '';
    answer.innerHTML = '';
};

appendNumber(letters){
    this.respond += letters;
};

updateDisplay(){
    this.response.textContent = this.respond;
       
};

delete() {
    this.respond = this.respond.toString().slice(0, -1);
  }

};



let questions = document.querySelector(".questions");
let checker = document.querySelector(".checker");
let letters = document.querySelectorAll("[data-letters]");
let response = document.querySelector(".response");
let clearBtn = document.querySelector(".clear");
let answer = document.querySelector(".answer");
let deleteBtn = document.querySelector(".delete")

const myWords = new Word(response);
let answers;

function contents(cont){
let rand = Math.floor(Math.random() * cont.length);
questions.innerHTML = cont[rand].name;
 answers = cont[rand]["answer"][0];

}

contents(words);

function check(){
checker.addEventListener("click", function(){

    if(response.innerHTML === ''){
        response.innerHTML = "Enter a word";

    }
    else if(response.innerHTML === answers){
        console.log("correct");
        answer.innerHTML = "correct";
        answer.classList.add("correct");
    }
    else{
        answer.innerHTML = "wrong";
        answer.classList.add("wrong");
    }
});
};

check();

letters.forEach(button => {
    button.addEventListener('click', () => {
        myWords.appendNumber(button.innerText)
        myWords.updateDisplay();
    });
});



clearBtn.addEventListener('click', () =>{
    myWords.clear();
})

deleteBtn.addEventListener('click', () =>{
    myWords.delete();
    myWords.updateDisplay();
})



document.addEventListener("keyup", function (e) {
    // if (e.keyCode === 13) {
    //     e.preventDefault();   

    //         if(response.innerHTML ==''){
    //             response.innerHTML = "Enter a word";
        
    //         }
    //         else if(response.innerHTML === answers){
    //             console.log("correct");
    //             answer.innerHTML = "correct";
    //             answer.classList.add("correct");
    //         }
    //         else{
    //             answer.innerHTML = "wrong";
    //             answer.classList.add("wrong");
    //         }
    //     }
    
    if(e.keyCode === 65){
        e.preventDefault();
        myWords.appendNumber(e.key)
        myWords.updateDisplay()
    }
    if(e.keyCode === 66){
        event.preventDefault();
        myWords.appendNumber(event.key)
        myWords.updateDisplay()
    }
    if(e.keyCode === 67){
        event.preventDefault();
        myWords.appendNumber(event.key)
        myWords.updateDisplay()
    }
    if(e.keyCode === 68){
        event.preventDefault();
        myWords.appendNumber(event.key)
        myWords.updateDisplay()
    }
    if(e.keyCode === 69){
        event.preventDefault();
        myWords.appendNumber(event.key)
        myWords.updateDisplay()
    }
    if(e.keyCode === 70){
        event.preventDefault();
        myWords.appendNumber(event.key)
        myWords.updateDisplay()
    }
    if(e.keyCode === 71){
        event.preventDefault();
        myWords.appendNumber(event.key)
        myWords.updateDisplay()
    }
    if(e.keyCode === 72){
        event.preventDefault();
        myWords.appendNumber(event.key)
        myWords.updateDisplay()
    }
    if(e.keyCode === 73){
        event.preventDefault();
        myWords.appendNumber(event.key)
        myWords.updateDisplay()
    }
    if(e.keyCode === 74){
        event.preventDefault();
        myWords.appendNumber(event.key)
        myWords.updateDisplay()
    }
    if(e.keyCode === 75){
        event.preventDefault();
        myWords.appendNumber(event.key)
        myWords.updateDisplay()
    }
    if(e.keyCode === 76){
        event.preventDefault();
        myWords.appendNumber(event.key)
        myWords.updateDisplay()
    }
    if(e.keyCode === 77){
        event.preventDefault();
        myWords.appendNumber(event.key)
        myWords.updateDisplay()
    }
    if(e.keyCode === 78){
        event.preventDefault();
        myWords.appendNumber(event.key)
        myWords.updateDisplay()
    }
    if(e.keyCode === 79){
        event.preventDefault();
        myWords.appendNumber(event.key)
        myWords.updateDisplay()
    }
    if(e.keyCode === 80){
        event.preventDefault();
        myWords.appendNumber(event.key)
        myWords.updateDisplay()
    }
    if(e.keyCode === 81){
        event.preventDefault();
        myWords.appendNumber(event.key)
        myWords.updateDisplay()
    }
    if(e.keyCode === 82){
        event.preventDefault();
        myWords.appendNumber(event.key)
        myWords.updateDisplay()
    }
    if(e.keyCode === 83){
        event.preventDefault();
        myWords.appendNumber(event.key)
        myWords.updateDisplay()
    }
    if(e.keyCode === 84){
        event.preventDefault();
        myWords.appendNumber(event.key)
        myWords.updateDisplay()
    }
    if(e.keyCode === 85){
        event.preventDefault();
        myWords.appendNumber(event.key)
        myWords.updateDisplay()
    }
    if(e.keyCode === 86){
        event.preventDefault();
        myWords.appendNumber(event.key)
        myWords.updateDisplay()
    }
    if(e.keyCode === 87){
        event.preventDefault();
        myWords.appendNumber(event.key)
        myWords.updateDisplay()
    }
    if(e.keyCode === 88){
        event.preventDefault();
        myWords.appendNumber(event.key)
        myWords.updateDisplay()
    }
    if(e.keyCode === 89){
        event.preventDefault();
        myWords.appendNumber(event.key)
        myWords.updateDisplay()
    }
    if(e.keyCode === 90){
        event.preventDefault();
        myWords.appendNumber(event.key)
        myWords.updateDisplay()
    }

    if(e.keyCode === 8){
        myWords.delete();
        myWords.updateDisplay()
    }
});

let next = document.querySelector(".next").addEventListener('click', () =>{
    contents(words)
    myWords.clear()
    myWords.updateDisplay()
})