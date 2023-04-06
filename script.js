const button = document.querySelectorAll(".button");
const answer = document.querySelectorAll(".answer-text");
const question = document.querySelectorAll(".question");
const arrow = document.querySelectorAll(".arrow");
const boxArray = new Array(button.length);


function openBox(place){
    if(boxArray[place] == 1){
        answer[place].classList.add("answer-text"); 
        arrow[place].classList.add("arrow");
        arrow[place].classList.remove("arrow-trf");
        question[place].classList.remove("question");
        boxArray[place] = 0;
    }else{
        answer[place].classList.remove("answer-text");
        arrow[place].classList.add("arrow-trf");
        arrow[place].classList.remove("arrow");
        question[place].classList.add("bold");

        boxArray[place] = 1;

    }

}


for ( let i = 0; i < button.length; i++ ){
    boxArray[i] = 0;
    button[i].addEventListener("click" , function(){
        openBox(i);
    })
}